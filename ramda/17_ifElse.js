const R = require('ramda');

const idIsEqPayloadId = R.pipe(
  R.path(['action', 'payload', 'id']),
  R.propEq('id'),
);

const actionTypeIsRemoveTodo = R.pathEq(['action', 'type'], 'REMOVE_TODO');
const rejectByPayloadId = R.pipe(
  R.juxt([idIsEqPayloadId, R.prop('state')]),
  R.apply(R.reject),
);
const appendPayload = R.pipe(
  R.juxt([R.path(['action', 'payload']), R.prop('state')]),
  R.apply(R.append),
);

const updateState = (state = [], action) =>
  R.ifElse(actionTypeIsRemoveTodo, rejectByPayloadId, appendPayload)({
    state,
    action,
  });

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
state = updateState(state, action1);
console.log(state);
state = updateState(state, action2);
console.log(state);
