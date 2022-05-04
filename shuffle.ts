import { DECK_FULL, replaceAces, shuffle } from './core';

/*
shuffle the deck
make a hash of it
check if the hash exists in the DB
if it does, did it fail?
if so, return the results of the failure

if not, add it to the DB
output the shuffled deck key

DB [SQLite]
hash/key string
deck string[]
attempted = false
was_successful = false
number_of_attempts = 0
time_taken = 0
timestamp
*/

console.log(DECK_FULL);
// This flipping and reshuffling is to make the shuffling be more random. See
// the notes on the shuffle() function.
const x = replaceAces(shuffle(shuffle(DECK_FULL).reverse()));
console.log(x.length, x);
