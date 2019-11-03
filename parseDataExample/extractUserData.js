const R = require('ramda');

const getFullName = require('./utils/getFullName');

const extractUserData = R.converge(R.mergeRight, [
  R.pick(['username', 'email']),
  R.pipe(
    R.prop('profile'),
    R.applySpec({
      fullName: getFullName,
      address: R.pipe(
        R.prop('address'),
        R.values,
        R.join(', '),
      ),
    }),
  ),
]);

module.exports = extractUserData;
