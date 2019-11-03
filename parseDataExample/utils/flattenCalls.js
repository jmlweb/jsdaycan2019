const R = require('ramda');

const flattenCalls = R.pipe(
  R.values,
  R.apply(R.concat),
);

module.exports = flattenCalls;
