const R = require('ramda');

/**
 * UPDATE
 */

const listData = ['ay6d73gf-23467', 'Opel Astra', 23456];
console.log(R.update(2, 23601, listData));

/**
 * ASSOC
 */
const objData = {
  id: 'ay6d73gf-23467',
  model: 'Opel Astra',
  km: 23456,
};
console.log(R.assoc('km', 23601, objData));
