const R = require('ramda');

const getContactId = require('./utils/getContactId');

const getSafeDuration = R.propOr(0, 'duration');

const getTypeDuration = R.reduce((acc, curr) => {
  // Retrieve the contact id from the caller or called prop
  const contactId = getContactId(curr);
  // Return the value for that id in the accumulated, or 0 if not found
  // Then, add 1
  const contactDuration = R.pipe(
    R.propOr(0, contactId),
    R.add(getSafeDuration(curr)),
  )(acc);
  // Merge the accumulated with an object with the id as key and the counter as value
  return R.assoc(contactId, contactDuration, acc);
}, {});

/**
 * {} => {}
 */
const getDurationByContact = R.pipe(
  R.prop('calls'),
  R.map(getTypeDuration),
);

module.exports = getDurationByContact;
