const R = require('ramda');

/**
 * fn => [] => {}
 */
const buildCountTypeCalls = fn =>
  R.reduce((acc, curr) => {
    // Retrieve the id from applying the supplied fn
    const id = fn(curr);
    // Return the value for that id in the accumulated, or 0 if not found
    // Then, add 1
    const calls = R.pipe(
      R.propOr(0, id),
      R.add(1),
    )(acc);
    // Merge the accumulated with an object with the id as key and the counter as value
    return R.assoc(id, calls, acc);
  }, {});

module.exports = buildCountTypeCalls;
