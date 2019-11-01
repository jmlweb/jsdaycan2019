const R = require('ramda');

const getContactId = require('./utils/getContactId');
const buildCountTypeCalls = require('./utils/buildCountTypeCalls');
const evolveAndMerge = require('./utils/evolveAndMerge');

const countTypeCalls = buildCountTypeCalls(getContactId);

/**
 * {} => number
 */
const countTotalCalls = R.pipe(
  // Get incoming and outgoing objects
  // Merge them adding their values
  R.values,
  R.apply(R.mergeWith(R.add)),
);

/**
 * {} => {}
 */
const countCallsByContact = R.pipe(
  R.prop('calls'),
  R.map(countTypeCalls),
  evolveAndMerge({
    total: countTotalCalls,
  }),
);

module.exports = countCallsByContact;
