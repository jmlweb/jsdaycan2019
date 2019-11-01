const R = require('ramda');

const countCallsByContact = require('./countCallsByContact');
const getFormattedContactsObj = require('./getFormattedContactsObj');
const replaceNumbersByContacts = require('./replaceNumbersByContacts');

const getParsedCountCallsByContact = R.pipe(
  R.applySpec({
    contacts: getFormattedContactsObj,
    callsCount: countCallsByContact,
  }),
  ({ contacts, callsCount }) =>
    R.map(replaceNumbersByContacts(contacts), callsCount),
);

module.exports = getParsedCountCallsByContact;
