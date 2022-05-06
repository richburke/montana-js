import {
  CARD_KING_VALUE,
  DECK_DETAILS,
  DECK_DETAILS_MAPPED,
  DECK_ROW_START_INDICES,
  DECK_TWOS,
} from '../constants';
import { CardDetails } from '../types';
import { first } from './base';

export const find2sNotAtRowStart = (deck: string[]) =>
  deck.reduce((acc: number[], card: string, index: number) => {
    if (DECK_TWOS.includes(card) && !DECK_ROW_START_INDICES.includes(index)) {
      acc.push(index);
    }
    return acc;
  }, []);

export const getCardDetails = (v: string) => DECK_DETAILS[v];

export const getDisplayOf = (v: string) => DECK_DETAILS[v].display;

export const getValueOf = (v: string) => DECK_DETAILS[v].value;

export const getValueFromDetails = ({ value }: Record<'value', number>) =>
  value;

export const getKeyFromDetails = ({ key }: Record<'key', string>) => key;

export const getSuitAndValueFromDetails = ({
  suit,
  value,
}: Record<'value' | 'suit', number | string>) => ({
  suit,
  value,
});

export const getNextHighestCardValue = (v: number) =>
  v === CARD_KING_VALUE ? -1 : v + 1;

export const getNextHighestCard = ({
  suit,
  value: testValue,
}): CardDetails | undefined => {
  if (testValue === CARD_KING_VALUE) {
    return undefined;
  }
  return first(
    DECK_DETAILS_MAPPED[suit].filter(({ value }) => value === testValue + 1),
  ) as CardDetails;
};
