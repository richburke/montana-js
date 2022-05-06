import {
  DECK_GOAL,
  display,
  filterValidMovePositions,
  find2sNotAtRowStart,
  findEmptyPositions,
  findIndexByCardKey,
  getCardAt,
  getCardDetails,
  getEndOfRowIndex,
  getIndexOfPreviousCard,
  getKeyFromDetails,
  getNextHighestCard,
  getStartOfRowIndex,
  getSuitAndValueFromDetails,
  getValueOf,
  isGoalState,
  isIndexAStartOfRowIndex,
  log,
  makeFileHashKey,
  makeHashKey,
  swap,
} from './core';

const shuffled = [
  '♠6',
  '♠2',
  null,
  '♠Q',
  '♠4',
  '♥Q',
  '♣J',
  '♣9',
  '♥10',
  '♦9',
  '♥7',
  '♥6',
  '♥9',
  '♦K',
  '♣6',
  '♥5',
  '♠3',
  '♣8',
  '♣4',
  '♣7',
  '♥J',
  '♥2',
  '♠5',
  null,
  '♥K',
  '♦5',
  '♦10',
  '♦6',
  null,
  '♦8',
  '♦7',
  '♠10',
  '♥3',
  '♦4',
  '♠K',
  '♥8',
  '♦3',
  null,
  '♣3',
  '♣2',
  '♦2',
  '♠J',
  '♣K',
  '♣Q',
  '♠9',
  '♥4',
  '♦J',
  '♣10',
  '♠8',
  '♣5',
  '♠7',
  '♦Q',
];
// console.log('>', isGoalState(shuffled, DECK_GOAL));

/**
 * @todo
 * - write results to JSON files
 *   - results/<file hash of start deck>.json
 *   - key
 *   - startDeck
 *   - deck
 *   - results: [{
 *        timestamp,
 *        isSolved,
 *        completedDeck
 *     }]
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

const result = solve(shuffled);
console.log('======');
console.log(display(result));
console.log(makeHashKey(result));
console.log(makeFileHashKey(result));
console.log(isGoalState(result, DECK_GOAL) ? 'Success! :)' : 'Failed :(');
// console.log('>', y.map(getStartOfRowIndex));
// console.log('>', y.map(getEndOfRowIndex));
// It seems like a Monad might be good here.
// y.map(getIndexOfPreviousCard(shuffled))
//   .filter((v) => v !== -1)
//   .map(getCardAt(shuffled))
//   .map(getCardDetails)
//   .map(log)
//   .map(getNextHighestCard)
//   .map(log)
//   .map(getKeyFromDetails)
//   .map(log)
//   .map(findIndexByCardKey(shuffled))
//   .map(log);

// .map(getSuitAndValueFromDetails),
// Find index by suit and value
// Get next card in sequence
