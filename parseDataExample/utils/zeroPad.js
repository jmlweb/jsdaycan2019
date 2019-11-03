const R = require('ramda');

const zeroPad = R.pipe(
  R.toString,
  R.when(R.gt(10), R.concat('0')),
);

module.exports = zeroPad;
