const R = require('ramda');

const getFullName = R.pipe(
  R.props(['firstName', 'lastName']),
  R.join(' '),
);

module.exports = getFullName;
