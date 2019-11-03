const R = require('ramda');

/**
 * Generates a reducer based on an initial state and a resolvers obj.
 * The resolvers obj comes with the action types to listen for as keys,
 * and the updater functions as values.
 * The updater functions receives the current state as first argument,
 * and the action as the second one.
 * In case of receiving an unkown action, it returns the current state.
 */
const generateReducer = (initialState, actionsResolversObj) => (
  state = initialState,
  action,
) => {
  const resolverFn = R.propOr(R.identity, action.type, actionsResolversObj);
  return resolverFn(state, action);
};

module.exports = generateReducer;
