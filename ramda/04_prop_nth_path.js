const R = require('ramda');

const data = {
  name: 'José Manuel',
  list1: ['c#', 'f#', 'haskell', 'javascript', 'typescript'],
  list2: [
    {
      id: 'milk',
      value: 80,
    },
    {
      id: 'cocoa',
      value: 340,
    },
  ],
};

console.log(R.prop('name', data));
console.log(R.nth(4, data.list1));
console.log(R.path(['list2', 1, 'id'], data));
// console.log(data.list2[2].id);
// console.log(data && data.list2 && data.list2[2] && data.list2[2].id)
console.log(R.path(['list2', 2, 'id'], data));
console.log(R.path(['list2', 2, 'id'], undefined));
