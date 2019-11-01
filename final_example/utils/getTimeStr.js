const R = require('ramda');

const padTime = require('./padTime');

const roundSeconds = seconds => Math.round(seconds * 100) / 100;

/**
 * number => string
 */
const getTimeStr = sec => {
  const hrs = Math.floor(sec / 3600);
  const min = Math.floor((sec - hrs * 3600) / 60);
  const seconds = roundSeconds(sec - hrs * 3600 - min * 60);
  const result = R.pipe(
    R.map(padTime),
    R.join(':'),
  )([hrs, min, seconds]);
  return result;
};

module.exports = getTimeStr;
