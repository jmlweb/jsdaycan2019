const R = require('ramda');

/**
 * ADJUST
 */

const listData = ['ay6d73gf-23467', 'Opel Astra', 23456];
console.log(R.adjust(2, R.add(145), listData));

/**
 * EVOLVE
 */
const objData = {
  id: 'ay6d73gf-23467',
  model: 'Opel Astra',
  km: 23456,
};
console.log(
  R.evolve(
    {
      km: R.add(145),
    },
    objData,
  ),
);
