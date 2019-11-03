const R = require('ramda');

const zeroPad = require('./zeroPad');

const getHours = R.pipe(
  R.divide(R.__, 3600),
  Math.floor,
);

const getNegativeSecondsFromHour = R.pipe(
  getHours,
  R.multiply(-3600),
);

const getMinutes = R.pipe(
  R.juxt([R.identity, getNegativeSecondsFromHour]),
  R.sum,
  R.divide(R.__, 60),
  Math.floor,
);

const getNegativeSecondsFromMinute = R.pipe(
  getMinutes,
  R.multiply(-60),
);

const getSeconds = R.pipe(
  R.juxt([
    R.identity,
    getNegativeSecondsFromHour,
    getNegativeSecondsFromMinute,
  ]),
  R.sum,
);

const getTimeStr = R.pipe(
  R.juxt([getHours, getMinutes, getSeconds]),
  R.map(zeroPad),
  R.join(':'),
);

module.exports = getTimeStr;
