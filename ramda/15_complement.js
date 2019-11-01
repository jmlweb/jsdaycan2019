const R = require('ramda');

const typeIsNotAnimal = R.complement(R.propEq('type', 'animal'));

const data = {
  type: 'plant',
};

console.log(typeIsNotAnimal(data));
