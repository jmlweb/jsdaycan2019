const R = require('ramda');

const data = {
  type: 'animal',
  specie: 'dog',
  bodyParts: {
    head: 1,
    legs: 4,
    tail: 1,
  },
};

const isAnimal = R.propEq('type', 'animal');
const hasFourLegs = R.pathEq(['bodyParts', 'legs'], 4);
const specieIs = R.propEq('specie');

const isQuadrupede = R.both(isAnimal, hasFourLegs);
const isEagleOrParrot = R.either(specieIs('eagle'), specieIs('parrot'));

const isValidAnimal = R.either(isQuadrupede, isEagleOrParrot);
console.log(isValidAnimal(data));
