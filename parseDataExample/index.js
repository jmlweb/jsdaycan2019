const R = require('ramda');

const DATA_MOCK = require('./DATA_MOCK');

const extractUserData = require('./extractUserData');
const extractByContact = require('./extractByContact');
const extractBusiestHours = require('./extractBusiestHours');
const extractAbsolute = require('./extractAbsolute');

const extractValues = R.applySpec({
  userData: extractUserData,
  byContact: extractByContact,
  busiestHours: extractBusiestHours,
  absolute: extractAbsolute,
});

console.debug(JSON.stringify(extractValues(DATA_MOCK), null, 2));
