/**
 * left partial
 */
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const partialLeft = (fn, ...prevArgs) => (...nextArgs) =>
  fn(...prevArgs, ...nextArgs);

const partialGetFullName = partialLeft(getFullName, 'José Manuel');
console.log(partialGetFullName('Lucas'));

/**
 * right partial
 */
const concatenateAll = (...args) => args.join(' ');

const partialRight = (fn, ...nextArgs) => (...prevArgs) =>
  fn(...prevArgs, ...nextArgs);

const partialConcatenateAll = partialRight(concatenateAll, 'serious?');
console.log(partialConcatenateAll('Why', 'so'));
