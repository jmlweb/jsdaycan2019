const R = require('ramda');

const addPixels = R.concat(R.__, 'px');
console.log(addPixels('12'));
