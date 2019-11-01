const R = require('ramda');

const data = ['c#', 'f#', 'haskell', 'javascript', 'typescript'];

// first element
console.log(R.head(data));
// last element
console.log(R.last(data));
// all, but first element
console.log(R.tail(data));
// all, but last element
console.log(R.init(data));
