const R = require('ramda');
const v = require('voca');

/**
 * Receives an object where the keys are the action types to dispatch,
 * and the values are the payload transformer functions.
 * In case of receiving an empty value (undefined or null),
 * it returns the argument received as payload.
 */
const generateActions = sourceObj =>
  R.reduce(
    (acc, curr) => {
      const camelCasedKey = v.camelCase(curr);
      const payloadTransformer = R.propOr(R.identity, curr, sourceObj);
      const actionCreator = R.pipe(
        payloadTransformer,
        R.objOf('payload'),
        R.assoc('type', curr),
      );
      return R.assoc(camelCasedKey, actionCreator, acc);
    },
    {},
    R.keys(sourceObj),
  );

module.exports = generateActions;
