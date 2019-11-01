const R = require('ramda');

const getFullName = require('./utils/getFullName');

const getFormattedContacts = R.pipe(
  R.prop('contacts'),
  R.map(
    R.applySpec({
      id: R.prop('id'),
      fullName: getFullName,
    }),
  ),
);

const getContactObj = R.pipe(
  R.props(['id', 'fullName']),
  R.apply(R.objOf),
);

const getContactsObj = R.reduce(
  (acc, curr) => R.mergeRight(acc, getContactObj(curr)),
  {},
);

const getFormattedContactsObj = R.pipe(
  getFormattedContacts,
  getContactsObj,
);

module.exports = getFormattedContactsObj;
