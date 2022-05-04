import {
  DECK_GOAL,
  display,
  filterValidMovePositions,
  findEmptyPositions,
  getCardAt,
  getCardDetails,
  getEndOfRowIndex,
  getIndexOfPreviousCard,
  getStartOfRowIndex,
  getValueFromDetails,
  getValueOf,
  isGoalState,
  makeHashKey,
} from './core';

/*
- get the value of the card preceding a null, if any
- determine the position of a null; is it at the beginning of a row?  or the end of a row?
- get the card that should follow the card preceding the null
- get the position of the card (not null)
- determine if we have any moves available
*/

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
console.log('>', isGoalState(shuffled, DECK_GOAL));

console.log(display(shuffled));

const y = filterValidMovePositions(findEmptyPositions(shuffled));

console.log('y', y);
console.log('>', y.map(getStartOfRowIndex));
console.log('>', y.map(getEndOfRowIndex));
console.log(
  '>',
  y
    .map(getIndexOfPreviousCard(shuffled))
    .filter((v) => v !== -1)
    .map(getCardAt(shuffled))
    .map(getCardDetails)
    .map(getValueFromDetails),
);
