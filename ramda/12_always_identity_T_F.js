const R = require('ramda');

const data = 42;

const alwaysSmile = R.always('siempre smile');
console.log(alwaysSmile(data));

console.log(R.identity(data));
console.log(R.T(data)); // R.always(true)(data);
console.log(R.F(data)); // R.always(false)(data);
