const R = require('ramda');

const getTimeStr = require('./utils/getTimeStr');
const getContactId = require('./utils/getContactId');
const getFullName = require('./utils/getFullName');

const hasOnlyOneItem = R.pipe(
  R.length,
  R.gt(2),
);

const buildDataForContact = listName =>
  R.pipe(
    R.prop(listName),
    R.groupBy(getContactId),
    R.map(
      R.applySpec({
        [listName]: {
          count: R.length,
          duration: R.pipe(
            R.map(R.propOr(0, 'duration')),
            R.sum,
          ),
        },
      }),
    ),
  );

const calculateTotal = R.converge(R.assoc('total'), [
  R.pipe(
    R.values,
    R.ifElse(hasOnlyOneItem, R.head, R.apply(R.mergeWith(R.add))),
  ),
  R.identity,
]);

const groupCallsByContact = R.pipe(
  R.prop('calls'),
  // Map through incoming/outgoing props
  R.juxt([buildDataForContact('incoming'), buildDataForContact('outgoing')]),
  R.apply(R.mergeDeepRight),
  R.map(
    R.pipe(
      calculateTotal,
      R.map(
        R.evolve({
          duration: getTimeStr,
        }),
      ),
    ),
  ),
);

const extractObjFromContact = R.converge(R.objOf, [R.prop('id'), getFullName]);

const getFormattedContacts = R.pipe(
  R.prop('contacts'),
  R.reduce(
    R.pipe(
      R.pair,
      R.adjust(1, extractObjFromContact),
      R.apply(R.mergeRight),
    ),
    {},
  ),
);

const replaceNumbersByContacts = (contacts, calls) =>
  R.reduce(
    (acc, curr) => {
      // return the contact which key is the number, or the number
      const key = R.propOr(curr, curr, contacts);
      const value = R.prop(curr, calls);
      return R.mergeRight(acc, R.objOf(key, value));
    },
    {},
    R.keys(calls),
  );

const extractByContact = R.converge(replaceNumbersByContacts, [
  getFormattedContacts,
  groupCallsByContact,
]);

module.exports = extractByContact;
