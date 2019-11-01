const R = require('ramda');

const DATA_MOCK = require('./DATA_MOCK');

const getUserData = require('./getUserData');
const getParsedCountCallsByContact = require('./getParsedCountCallsByContact');
const getParsedDurationByContact = require('./getParsedDurationByContact');
const getTotalDuration = require('./getTotalDuration');
const countCallsByHour = require('./countCallsByHour');

const result = R.applySpec({
  user: getUserData,
  callsByContact: getParsedCountCallsByContact,
  durationByContact: getParsedDurationByContact,
  totalDuration: getTotalDuration,
  callsByHour: countCallsByHour,
})(DATA_MOCK);

console.log(result);
