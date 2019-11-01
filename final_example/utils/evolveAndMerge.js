const R = require('ramda');

/**
 * {} => {} => {}
 */
const evolveAndMerge = objectFns =>
  R.pipe(
    R.juxt([R.identity, R.evolve(objectFns)]),
    R.apply(R.mergeRight),
  );

module.exports = evolveAndMerge;
