import fs from 'fs';
import {
  DECK_FULL,
  DECK_GOAL,
  display,
  filterValidMovePositions,
  find2sNotAtRowStart,
  findEmptyPositions,
  findIndexByCardKey,
  getCardAt,
  getCardDetails,
  getIndexOfPreviousCard,
  getKeyFromDetails,
  getNextHighestCard,
  isGoalState,
  isIndexAStartOfRowIndex,
  log,
  makeFileHashKey,
  replaceAces,
  shuffle,
  swap,
} from './core';

const FILE_RESULTS = './results.json';

/**
 * @todo
 * - add the ability to pass in a key, and attempt to solve again
 *   - solve-for.ts
 *   - solve.ts
 * - Make into iteration
 * - Add choice logic
 *   - Prioritize spaces in the first position.
 *   - Move a 2 into those.  Which 2?
 *     √ One that isn't already at the start of a row
 *     - One that has the longest sequence of correct values following it.
 *
 * prioritizeMoves()
 * - score different scenarios
 * - space at row start -> very high
 * - space near beginning of row -> high
 * - space that follows king  -> subtract from score
 */

const solve = (deck: string[]) => {
  if (isGoalState(deck, DECK_GOAL)) {
    return deck;
  }

  console.log('---');
  console.log('BEFORE');
  console.log(display(deck));

  const movePositions = filterValidMovePositions(findEmptyPositions(deck));
  if (movePositions.length === 0) {
    return deck;
  }

  let movesMade = 0;
  for (let pos of movePositions) {
    if (isIndexAStartOfRowIndex(pos)) {
      const twos = find2sNotAtRowStart(deck);
      if (twos.length > 0) {
        const twoIndex = twos.shift();
        swap(pos, twoIndex, deck);
        continue;
      }
    }

    const previousCardIndex = getIndexOfPreviousCard(deck)(pos);
    if (previousCardIndex < 0) {
      continue;
    }

    const previousCardDetails = getCardDetails(
      getCardAt(deck)(previousCardIndex),
    );
    // console.log(
    //   'next highest',
    //   getNextHighestCard(previousCardDetails),
    //   previousCardDetails,
    // );
    const nextHighestCard = getNextHighestCard(previousCardDetails);
    if (typeof nextHighestCard === 'undefined') {
      continue;
    }
    const nextHighestCardIndex = findIndexByCardKey(deck)(
      getKeyFromDetails(nextHighestCard),
    );

    swap(pos, nextHighestCardIndex, deck);
    movesMade = movesMade + 1;
  }

  if (movesMade === 0) {
    // We're stuck.
    console.log('stuck');
    console.log(display(deck));
    return deck;
  }

  console.log('AFTER');
  console.log(display(deck));
  return solve(deck);
};

const main = (numAttempts: number) => {
  do {
    // This flipping and reshuffling is to make the shuffling be more random. See
    // the notes on the shuffle() function.
    const startingState = replaceAces(shuffle(shuffle(DECK_FULL).reverse()));
    const fileKey = makeFileHashKey(startingState);
    const result = solve(startingState);

    console.log('======');
    console.log(display(result));
    console.log(isGoalState(result, DECK_GOAL) ? 'Success! :)' : 'Failed :(');

    let summaryData = {};
    if (fs.existsSync('./results/_summary.json')) {
      const summaryFile = fs.readFileSync(FILE_RESULTS, 'utf8');
      summaryData = summaryFile ? JSON.parse(summaryFile) : summaryData;
    }

    const attempt = {
      timestamp: new Date(),
      result,
      isSuccessful: isGoalState(result, DECK_GOAL),
    };

    if (summaryData[fileKey]) {
      summaryData[fileKey].attempts.push(attempt);
    } else {
      summaryData[fileKey] = {
        fileKey,
        startingState,
        ts: new Date(),
        attempts: [attempt],
      };
    }

    fs.writeFileSync(FILE_RESULTS, JSON.stringify(summaryData));
    numAttempts = numAttempts - 1;
  } while (numAttempts > 0);
};

main(process.argv.slice(2) ? Number(process.argv.slice(2)) : 1);
