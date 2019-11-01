const R = require('ramda');

console.log(`subtract: ${R.subtract(7, 3)}`);
console.log(`mathMod: ${R.mathMod(-21, 6)}`);
console.log(`modulo: ${R.modulo(-21, 6)}`);
console.log(`product: ${R.product([1, 2, 3, 4])}`);
console.log(`sum: ${R.sum([1, 2, 3, 4])}`);
console.log(`mean: ${R.mean([2, 12, 6])}`);
console.log(`median: ${R.median([2, 12, 6])}`);
