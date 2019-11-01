const R = require('ramda');

const padTime = require('./utils/padTime');

const DateConstructor = R.constructN(1, Date);
const getUTCHours = R.invoker(0, 'getUTCHours');
const buildCountTypeCalls = require('./utils/buildCountTypeCalls');

/**
 * {} => string
 */
const getHour = R.pipe(
  R.prop('date'),
  DateConstructor,
  getUTCHours,
  padTime,
);

const countTypeCalls = buildCountTypeCalls(getHour);

/**
 * {} => {}
 */
const countCallsByHour = R.pipe(
  R.prop('calls'),
  R.map(countTypeCalls),
);

module.exports = countCallsByHour;
