const R = require('ramda');

const getDurationByContact = require('./getDurationByContact');
const getFormattedContactsObj = require('./getFormattedContactsObj');
const replaceNumbersByContacts = require('./replaceNumbersByContacts');
const getTimeStr = require('./utils/getTimeStr');

const getParsedCountCallsByContact = R.pipe(
  R.applySpec({
    contacts: getFormattedContactsObj,
    durations: getDurationByContact,
  }),
  ({ contacts, durations }) =>
    R.map(
      R.pipe(
        replaceNumbersByContacts(contacts),
        R.map(getTimeStr),
      ),
      durations,
    ),
);

module.exports = getParsedCountCallsByContact;
