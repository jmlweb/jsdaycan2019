const R = require('ramda');

/**
 * {} => any
 */
const getContactId = R.either(R.prop('caller'), R.prop('called'));

module.exports = getContactId;
