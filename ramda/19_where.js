const R = require('ramda');

const isValidAnimal = R.where({
  type: R.equals('animal'),
  bodyParts: R.propEq('legs', 2),
  specie: R.either(R.equals('eagle'), R.equals('parrot')),
});

console.log(
  isValidAnimal({
    type: 'animal',
    specie: 'dog',
    bodyParts: {
      head: 1,
      legs: 4,
      tail: 1,
    },
  }),
);

console.log(
  isValidAnimal({
    type: 'animal',
    specie: 'eagle',
    bodyParts: {
      head: 1,
      legs: 2,
      tail: 1,
    },
  }),
);
