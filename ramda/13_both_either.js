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
const hasTwoLegs = R.pathEq(['bodyParts', 'legs'], 2);
const specieIs = R.propEq('specie');

const isBird = R.both(isAnimal, hasTwoLegs);
const isEagleOrParrot = R.either(specieIs('eagle'), specieIs('parrot'));

const isValidAnimal = R.either(isBird, isEagleOrParrot);
console.log(isValidAnimal(data));
