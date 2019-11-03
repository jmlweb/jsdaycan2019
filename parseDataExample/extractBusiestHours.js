const R = require('ramda');

const zeroPad = require('./utils/zeroPad');
const flattenCalls = require('./utils/flattenCalls');

const DateConstructor = R.constructN(1, Date);
const getUTCHours = R.invoker(0, 'getUTCHours');

const extractBusiestHours = R.pipe(
  R.prop('calls'),
  flattenCalls,
  R.countBy(
    R.pipe(
      R.prop('date'),
      DateConstructor,
      getUTCHours,
      zeroPad,
    ),
  ),
  // transform the object into an array, having the id as first item and the counter as second
  R.toPairs,
  R.sort(R.descend(R.nth(1))),
  R.map(R.zipObj(['id', 'count'])),
);

module.exports = extractBusiestHours;
