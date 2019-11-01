const R = require('ramda');

const getTimeStr = require('./utils/getTimeStr');

const getTypeDuration = R.reduce(
  (acc, curr) => R.add(acc, R.propOr(0, 'duration', curr)),
  0,
);

const getTotalDuration = R.pipe(
  R.prop('calls'),
  R.map(
    R.pipe(
      getTypeDuration,
      getTimeStr,
    ),
  ),
);

module.exports = getTotalDuration;
