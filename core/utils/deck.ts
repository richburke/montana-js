import {
  CARD_KEY_ACE_CLUBS,
  CARD_KEY_ACE_DIAMONDS,
  CARD_KEY_ACE_HEARTS,
  CARD_KEY_ACE_SPADES,
  DECK_ACES,
  DECK_DETAILS,
  DECK_EMPTY_SPACE,
  DECK_EMPTY_SPACE_DISPLAY,
  DECK_EMPTY_SPACE_HASH,
  DECK_ROW_END_INDICES,
  DECK_ROW_START_INDICES,
  SUIT_CLUBS_KEY,
  SUIT_DIAMONDS_KEY,
  SUIT_HEARTS_KEY,
  SUIT_SPADES_KEY,
} from '../constants';

export const shuffle = (unshuffled: string[]) =>
  /**
   * @todo
   * I got this algorithm from the Lingo User's Journal.  It's genius but it has
   * a major problem.  Items at the beginning of the original array have a
   * higher frequency of ending up at the beginning of the shuffled array.
   */
  unshuffled.reduce((acc: string[], v) => {
    // Randomize an index number.
    const index = Math.floor(Math.random() * unshuffled.length + 1) - 1;
    // Add the element at that index.  If the elements in the array are less
    // than the index, add it to the end.
    acc.splice(index, 0, v);
    return acc;
  }, []);

export const replaceAces = (deck: string[], replacement = DECK_EMPTY_SPACE) =>
  deck.reduce((acc: (string | null)[], v: string) => {
    acc.push(DECK_ACES.includes(v) ? replacement : v);
    return acc;
  }, []);

export const display = (deck: string[]) =>
  deck.reduce((acc, v, i) => {
    const card =
      v === DECK_EMPTY_SPACE
        ? DECK_EMPTY_SPACE_DISPLAY
        : DECK_DETAILS[v].display;
    return acc + (DECK_ROW_END_INDICES.includes(i) ? `${card}\n` : `${card}|`);
  }, '');

export const isGoalState = (deck: string[], goal: string[]) =>
  deck.join('|') === goal.join('|');

export const findEmptyPositions = (deck: string[]) =>
  deck.reduce((acc, v, i) => {
    if (v === DECK_EMPTY_SPACE) {
      acc.push(i);
    }
    return acc;
  }, []);

export const findIndexByCardKey = (deck: string[]) => (card: string) =>
  deck.findIndex((item: string) => item === card);

export const makeFileHashKey = (deck: string[]) =>
  makeHashKey(deck)
    .replace(new RegExp(SUIT_CLUBS_KEY, 'g'), 'c')
    .replace(new RegExp(SUIT_DIAMONDS_KEY, 'g'), 'd')
    .replace(new RegExp(SUIT_HEARTS_KEY, 'g'), 'h')
    .replace(new RegExp(SUIT_SPADES_KEY, 'g'), 's');

export const makeHashKey = (deck: string[]) =>
  deck.reduce(
    (acc, v) => acc + (v === DECK_EMPTY_SPACE ? DECK_EMPTY_SPACE_HASH : v),
    '',
  );

export const filterValidMovePositions = (spaceIndices: number[]) =>
  spaceIndices.filter((i) => !DECK_ROW_END_INDICES.includes(i));

export const getStartOfRowIndex = (index: number) => {
  for (let i = 0; i < DECK_ROW_START_INDICES.length; i++) {
    if (
      index >= DECK_ROW_START_INDICES[i] &&
      index <= DECK_ROW_END_INDICES[i]
    ) {
      return DECK_ROW_START_INDICES[i];
    }
  }
  return -1;
};

export const getEndOfRowIndex = (index: number) => {
  for (let i = 0; i < DECK_ROW_START_INDICES.length; i++) {
    if (
      index >= DECK_ROW_START_INDICES[i] &&
      index <= DECK_ROW_END_INDICES[i]
    ) {
      return DECK_ROW_END_INDICES[i];
    }
  }
  return -1;
};

export const getIndexOfPreviousCard =
  (deck: string[]) => (spaceIndex: number) => {
    const startBoundaryIndex = getStartOfRowIndex(spaceIndex);
    for (let i = spaceIndex - 1; i >= startBoundaryIndex; i--) {
      if (deck[i] !== DECK_EMPTY_SPACE) {
        return i;
      }
    }
    return -1;
  };

export const getCardAt = (deck: string[]) => (index: number) => deck[index];

export const isIndexAStartOfRowIndex = (index: number) =>
  DECK_ROW_START_INDICES.includes(index);
