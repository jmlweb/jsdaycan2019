const R = require('ramda');

const actionHasType = R.pathEq(['action', 'type']);

const idIsEqPayloadId = R.pipe(
  R.path(['action', 'payload', 'id']),
  R.propEq('id'),
);

const rejectByPayloadId = R.pipe(
  R.juxt([idIsEqPayloadId, R.prop('state')]),
  R.apply(R.reject),
);
const appendPayload = R.pipe(
  R.juxt([R.path(['action', 'payload']), R.prop('state')]),
  R.apply(R.append),
);

const reducer = (state = [], action) =>
  R.cond([
    [actionHasType('REMOVE_TODO'), rejectByPayloadId],
    [actionHasType('ADD_TODO'), appendPayload],
    [R.T, R.prop('state')],
  ])({ state, action });

const action1 = {
  type: 'ADD_TODO',
  payload: {
    id: 'a76df5h3hasdfz',
    name: 'Prepare talk for JSDay Canarias',
  },
};

const action2 = {
  type: 'REMOVE_TODO',
  payload: {
    id: 'a76df5h3hasdfz',
  },
};

let state;
state = reducer(state, action1);
console.log(state);
state = reducer(state, {
  type: 'CHECK',
});
console.log(state);
state = reducer(state, action2);
console.log(state);
