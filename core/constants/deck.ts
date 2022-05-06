import {
  CARD_KEY_ACE_CLUBS,
  CARD_KEY_ACE_DIAMONDS,
  CARD_KEY_ACE_HEARTS,
  CARD_KEY_ACE_SPADES,
  CARD_KEY_TWO_CLUBS,
  CARD_KEY_TWO_DIAMONDS,
  CARD_KEY_TWO_HEARTS,
  CARD_KEY_TWO_SPADES,
} from './card';

export const DECK_EMPTY_SPACE = null;
export const DECK_EMPTY_SPACE_DISPLAY = '   ';
export const DECK_EMPTY_SPACE_HASH = '-';
export const DECK_SUIT_CLUBS = 'clubs';
export const DECK_SUIT_DIAMONDS = 'diamonds';
export const DECK_SUIT_HEARTS = 'hearts';
export const DECK_SUIT_SPADES = 'spades';
export const DECK_ACES = [
  CARD_KEY_ACE_CLUBS,
  CARD_KEY_ACE_DIAMONDS,
  CARD_KEY_ACE_HEARTS,
  CARD_KEY_ACE_SPADES,
];
export const DECK_TWOS = [
  CARD_KEY_TWO_CLUBS,
  CARD_KEY_TWO_DIAMONDS,
  CARD_KEY_TWO_HEARTS,
  CARD_KEY_TWO_SPADES,
];
export const DECK_CLUBS = [
  '♣A',
  '♣2',
  '♣3',
  '♣4',
  '♣5',
  '♣6',
  '♣7',
  '♣8',
  '♣9',
  '♣10',
  '♣J',
  '♣Q',
  '♣K',
];
export const DECK_DIAMONDS = [
  '♦A',
  '♦2',
  '♦3',
  '♦4',
  '♦5',
  '♦6',
  '♦7',
  '♦8',
  '♦9',
  '♦10',
  '♦J',
  '♦Q',
  '♦K',
];
export const DECK_HEARTS = [
  '♥A',
  '♥2',
  '♥3',
  '♥4',
  '♥5',
  '♥6',
  '♥7',
  '♥8',
  '♥9',
  '♥10',
  '♥J',
  '♥Q',
  '♥K',
];
export const DECK_SPADES = [
  '♠A',
  '♠2',
  '♠3',
  '♠4',
  '♠5',
  '♠6',
  '♠7',
  '♠8',
  '♠9',
  '♠10',
  '♠J',
  '♠Q',
  '♠K',
];
export const DECK_DETAILS_CLUBS = {
  '♣A': {
    key: '♣A',
    suit: DECK_SUIT_CLUBS,
    value: 1,
    display: '♣ A', // Shouldn't appear in display.
  },
  '♣2': {
    key: '♣2',
    suit: DECK_SUIT_CLUBS,
    value: 2,
    display: '♣ 2',
  },
  '♣3': {
    key: '♣3',
    suit: DECK_SUIT_CLUBS,
    value: 3,
    display: '♣ 3',
  },
  '♣4': {
    key: '♣4',
    suit: DECK_SUIT_CLUBS,
    value: 4,
    display: '♣ 4',
  },
  '♣5': {
    key: '♣5',
    suit: DECK_SUIT_CLUBS,
    value: 5,
    display: '♣ 5',
  },
  '♣6': {
    key: '♣6',
    suit: DECK_SUIT_CLUBS,
    value: 6,
    display: '♣ 6',
  },
  '♣7': {
    key: '♣7',
    suit: DECK_SUIT_CLUBS,
    value: 7,
    display: '♣ 7',
  },
  '♣8': {
    key: '♣8',
    suit: DECK_SUIT_CLUBS,
    value: 8,
    display: '♣ 8',
  },
  '♣9': {
    key: '♣9',
    suit: DECK_SUIT_CLUBS,
    value: 9,
    display: '♣ 9',
  },
  '♣10': {
    key: '♣10',
    suit: DECK_SUIT_CLUBS,
    value: 10,
    display: '♣10',
  },
  '♣J': {
    key: '♣J',
    suit: DECK_SUIT_CLUBS,
    value: 11,
    display: '♣ J',
  },
  '♣Q': {
    key: '♣Q',
    suit: DECK_SUIT_CLUBS,
    value: 12,
    display: '♣ Q',
  },
  '♣K': {
    key: '♣K',
    suit: DECK_SUIT_CLUBS,
    value: 13,
    display: '♣ K',
  },
};
export const DECK_DETAILS_DIAMONDS = {
  '♦A': {
    key: '♦A',
    suit: DECK_SUIT_DIAMONDS,
    value: 1,
    display: '♦ A', // Shouldn't appear in display.
  },
  '♦2': {
    key: '♦2',
    suit: DECK_SUIT_DIAMONDS,
    value: 2,
    display: '♦ 2',
  },
  '♦3': {
    key: '♦3',
    suit: DECK_SUIT_DIAMONDS,
    value: 3,
    display: '♦ 3',
  },
  '♦4': {
    key: '♦4',
    suit: DECK_SUIT_DIAMONDS,
    value: 4,
    display: '♦ 4',
  },
  '♦5': {
    key: '♦5',
    suit: DECK_SUIT_DIAMONDS,
    value: 5,
    display: '♦ 5',
  },
  '♦6': {
    key: '♦6',
    suit: DECK_SUIT_DIAMONDS,
    value: 6,
    display: '♦ 6',
  },
  '♦7': {
    key: '♦7',
    suit: DECK_SUIT_DIAMONDS,
    value: 7,
    display: '♦ 7',
  },
  '♦8': {
    key: '♦8',
    suit: DECK_SUIT_DIAMONDS,
    value: 8,
    display: '♦ 8',
  },
  '♦9': {
    key: '♦9',
    suit: DECK_SUIT_DIAMONDS,
    value: 9,
    display: '♦ 9',
  },
  '♦10': {
    key: '♦10',
    suit: DECK_SUIT_DIAMONDS,
    value: 10,
    display: '♦10',
  },
  '♦J': {
    key: '♦J',
    suit: DECK_SUIT_DIAMONDS,
    value: 11,
    display: '♦ J',
  },
  '♦Q': {
    key: '♦Q',
    suit: DECK_SUIT_DIAMONDS,
    value: 12,
    display: '♦ Q',
  },
  '♦K': {
    key: '♦K',
    suit: DECK_SUIT_DIAMONDS,
    value: 13,
    display: '♦ K',
  },
};
export const DECK_DETAILS_HEARTS = {
  '♥A': {
    key: '♥A',
    suit: DECK_SUIT_HEARTS,
    value: 1,
    display: '♥ A', // Shouldn't appear in display.
  },
  '♥2': {
    key: '♥2',
    suit: DECK_SUIT_HEARTS,
    value: 2,
    display: '♥ 2',
  },
  '♥3': {
    key: '♥3',
    suit: DECK_SUIT_HEARTS,
    value: 3,
    display: '♥ 3',
  },
  '♥4': {
    key: '♥4',
    suit: DECK_SUIT_HEARTS,
    value: 4,
    display: '♥ 4',
  },
  '♥5': {
    key: '♥5',
    suit: DECK_SUIT_HEARTS,
    value: 5,
    display: '♥ 5',
  },
  '♥6': {
    key: '♥6',
    suit: DECK_SUIT_HEARTS,
    value: 6,
    display: '♥ 6',
  },
  '♥7': {
    key: '♥7',
    suit: DECK_SUIT_HEARTS,
    value: 7,
    display: '♥ 7',
  },
  '♥8': {
    key: '♥8',
    suit: DECK_SUIT_HEARTS,
    value: 8,
    display: '♥ 8',
  },
  '♥9': {
    key: '♥9',
    suit: DECK_SUIT_HEARTS,
    value: 9,
    display: '♥ 9',
  },
  '♥10': {
    key: '♥10',
    suit: DECK_SUIT_HEARTS,
    value: 10,
    display: '♥10',
  },
  '♥J': {
    key: '♥J',
    suit: DECK_SUIT_HEARTS,
    value: 11,
    display: '♥ J',
  },
  '♥Q': {
    key: '♥Q',
    suit: DECK_SUIT_HEARTS,
    value: 12,
    display: '♥ Q',
  },
  '♥K': {
    key: '♥K',
    suit: DECK_SUIT_HEARTS,
    value: 13,
    display: '♥ K',
  },
};
export const DECK_DETAILS_SPADES = {
  '♠A': {
    key: '♠A',
    suit: DECK_SUIT_SPADES,
    value: 1,
    display: '♠ A', // Shouldn't appear in display.
  },
  '♠2': {
    key: '♠2',
    suit: DECK_SUIT_SPADES,
    value: 2,
    display: '♠ 2',
  },
  '♠3': {
    key: '♠3',
    suit: DECK_SUIT_SPADES,
    value: 3,
    display: '♠ 3',
  },
  '♠4': {
    key: '♠4',
    suit: DECK_SUIT_SPADES,
    value: 4,
    display: '♠ 4',
  },
  '♠5': {
    key: '♠5',
    suit: DECK_SUIT_SPADES,
    value: 5,
    display: '♠ 5',
  },
  '♠6': {
    key: '♠6',
    suit: DECK_SUIT_SPADES,
    value: 6,
    display: '♠ 6',
  },
  '♠7': {
    key: '♠7',
    suit: DECK_SUIT_SPADES,
    value: 7,
    display: '♠ 7',
  },
  '♠8': {
    key: '♠8',
    suit: DECK_SUIT_SPADES,
    value: 8,
    display: '♠ 8',
  },
  '♠9': {
    key: '♠9',
    suit: DECK_SUIT_SPADES,
    value: 9,
    display: '♠ 9',
  },
  '♠10': {
    key: '♠10',
    suit: DECK_SUIT_SPADES,
    value: 10,
    display: '♠10',
  },
  '♠J': {
    key: '♠J',
    suit: DECK_SUIT_SPADES,
    value: 11,
    display: '♠ J',
  },
  '♠Q': {
    key: '♠Q',
    suit: DECK_SUIT_SPADES,
    value: 12,
    display: '♠ Q',
  },
  '♠K': {
    key: '♠K',
    suit: DECK_SUIT_SPADES,
    value: 13,
    display: '♠ K',
  },
};
export const DECK_DETAILS = {
  ...DECK_DETAILS_CLUBS,
  ...DECK_DETAILS_DIAMONDS,
  ...DECK_DETAILS_HEARTS,
  ...DECK_DETAILS_SPADES,
};
export const DECK_DETAILS_MAPPED = {
  [DECK_SUIT_CLUBS]: Object.values(DECK_DETAILS_CLUBS),
  [DECK_SUIT_DIAMONDS]: Object.values(DECK_DETAILS_DIAMONDS),
  [DECK_SUIT_HEARTS]: Object.values(DECK_DETAILS_HEARTS),
  [DECK_SUIT_SPADES]: Object.values(DECK_DETAILS_SPADES),
};
export const DECK_FULL = [
  ...DECK_CLUBS,
  ...DECK_DIAMONDS,
  ...DECK_HEARTS,
  ...DECK_SPADES,
];
export const DECK_GOAL = [
  ...DECK_CLUBS.slice(1),
  ...DECK_DIAMONDS.slice(1),
  ...DECK_HEARTS.slice(1),
  ...DECK_SPADES.slice(1),
];
export const DECK_SUITS = {
  clubs: '♣',
  diamonds: '♦',
  hearts: '♥',
  spades: '♠',
};
export const DECK_ROW_START_INDICES = [0, 13, 26, 39];
export const DECK_ROW_END_INDICES = [12, 25, 38, 51];
