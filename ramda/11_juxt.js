const R = require('ramda');

const myArr = [1, 2, 3, 4, 5];

const multiplyEachBy2 = R.map(R.multiply(2));

const isOdd = R.modulo(R.__, 2);
const filterOdds = R.filter(
  R.pipe(
    isOdd,
    R.equals(0),
  ),
);

console.log(R.juxt([R.sum, multiplyEachBy2, filterOdds])(myArr));
