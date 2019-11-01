const R = require('ramda');

/**
 * {} => string,
 */
const getFullName = R.pipe(
  R.props(['firstName', 'lastName']),
  R.join(' '),
);

module.exports = getFullName;
