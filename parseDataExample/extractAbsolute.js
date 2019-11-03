const R = require('ramda');

const flattenCalls = require('./utils/flattenCalls');

const getCountPlusOne = R.pipe(
  R.propOr(0, 'count'),
  R.add(1),
);

const getSafeDuration = R.propOr(0, 'duration');

const extractAbsolute = R.pipe(
  R.prop('calls'),
  flattenCalls,
  R.reduce(
    (acc, curr) => ({
      count: getCountPlusOne(acc),
      duration: R.pipe(
        R.map(getSafeDuration),
        R.apply(R.add),
      )([acc, curr]),
    }),
    {},
  ),
);

module.exports = extractAbsolute;
