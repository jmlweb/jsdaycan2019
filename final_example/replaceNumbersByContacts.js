const R = require('ramda');

const replaceNumbersByContacts = contactsObj => value =>
  R.reduce(
    (acc, curr) => {
      // return the contact which key is the number, or the number
      const key = R.propOr(curr, curr, contactsObj);
      return R.assoc(key, R.prop(curr, value), acc);
    },
    {},
    R.keys(value),
  );

module.exports = replaceNumbersByContacts;
