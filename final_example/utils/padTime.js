const R = require('ramda');

const padTime = R.pipe(
  R.toString,
  R.when(R.gt(10), R.concat('0')),
);

module.exports = padTime;
