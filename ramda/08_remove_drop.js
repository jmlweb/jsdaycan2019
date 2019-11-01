const R = require('ramda');

const myArr = ['first', 'second', 'third', 'fourth', 'fifth'];

/**
 * Removes "y" items, starting from "x"
 */
console.log(R.remove(2, 1, myArr));
console.log(R.remove(2, 3, myArr));

// Remove "x" items from start
console.log(R.drop(2, myArr));
// Remove "x" items from end
console.log(R.dropLast(2, myArr));
