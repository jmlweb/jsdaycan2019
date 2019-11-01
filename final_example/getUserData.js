const R = require('ramda');

const getFullName = require('./utils/getFullName');

const profileLens = R.lensProp('profile');

const parseProfile = R.over(
  profileLens,
  R.applySpec({
    birthDay: R.prop('birthDay'),
    fullName: getFullName,
    fullAddress: R.pipe(
      R.prop('address'),
      R.values,
      R.join(','),
    ),
  }),
);

const injectParsedProfile = R.pipe(
  parseProfile,
  // Merge username, email, birthday, fullName and fullAdress
  R.juxt([R.pick(['username', 'email']), R.view(profileLens)]),
  R.apply(R.mergeRight),
);

const getUserData = R.pipe(
  R.pick(['username', 'email', 'profile']),
  injectParsedProfile,
);

module.exports = getUserData;
