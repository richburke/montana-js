import { CARD_KING_VALUE, DECK_DETAILS } from '../constants';

export const getCardDetails = (v: string) => DECK_DETAILS[v];

export const getDisplayOf = (v: string) => DECK_DETAILS[v].display;

export const getValueOf = (v: string) => DECK_DETAILS[v].value;

export const getValueFromDetails = (o: Record<'value', number>) => o.value;

export const getNextHighestCard = (v: number) =>
  v === CARD_KING_VALUE ? -1 : v + 1;
