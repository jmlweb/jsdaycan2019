const mapToDouble = arr => arr.map(x => x * 2);
const mapToObj = arr => arr.map(value => ({ value }));
const sumAll = arr => arr.reduce((acc, curr) => acc + curr.value, 0);
const pipe = (...fns) => x => fns.reduce((acc, curr) => curr(acc), x);

const originalArr = [2, 4, 2];

// Without pipe
const result1 = sumAll(mapToObj(mapToDouble(originalArr)));
// With pipe
// Pipe is nearer to how the functions are executed
const result2 = pipe(
  mapToDouble,
  mapToObj,
  sumAll,
)(originalArr);
console.log(`result1: ${result1}`);
console.log(`result2: ${result2}`);

module.exports = {
  pipe,
};
