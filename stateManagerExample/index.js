const R = require('ramda');

const generateActions = require('./generateActions');
const generateReducer = require('./generateReducer');

const INITIAL_STATE = {
  todos: [],
  selectedIdForRemoving: null,
};

const actions = generateActions({
  ADD_TODO: undefined,
  REMOVE_TODO: undefined,
  SELECT_TODO_FOR_REMOVE: undefined,
});

const todosLens = R.lensProp('todos');
const selectedIdForRemovingLens = R.lensProp('selectedIdForRemoving');

const buildRejectFnForSelectedId = R.pipe(
  R.prop('selectedIdForRemoving'),
  R.propEq('id'),
  R.reject,
);

const getStateWithIdResetted = R.over(
  selectedIdForRemovingLens,
  R.always(INITIAL_STATE.selectedIdForRemoving),
);

const reducer = generateReducer(INITIAL_STATE, {
  ADD_TODO: (state, action) =>
    R.over(todosLens, R.append(action.payload), state),
  REMOVE_TODO: R.converge(R.over(todosLens), [
    buildRejectFnForSelectedId,
    getStateWithIdResetted,
  ]),
  SELECT_TODO_FOR_REMOVE: (state, action) =>
    R.set(selectedIdForRemovingLens, action.payload, state),
});

/**
 * TEST REDUCER
 */

const firstState = reducer(
  INITIAL_STATE,
  actions.addTodo({
    id: 1,
    title: 'Buy milk',
  }),
);
const secondState = reducer(
  firstState,
  actions.addTodo({
    id: 2,
    title: 'Write an email to Susan',
  }),
);
const thirdState = reducer(secondState, actions.selectTodoForRemove(1));
const fourthState = reducer(thirdState, actions.removeTodo());

console.log(firstState, secondState, thirdState, fourthState);
