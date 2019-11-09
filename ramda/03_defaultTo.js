const R = require('ramda');

const getSafeValue = R.defaultTo('');

const ohNo = null;
// console.log(ohNo.length);
const str1 = getSafeValue('hi!');
const str2 = getSafeValue(ohNo);
console.log(str1.length);
console.log(str2.length);
