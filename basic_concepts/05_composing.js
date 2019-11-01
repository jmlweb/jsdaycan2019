const mapToDouble = arr => arr.map(x => x * 2);
const mapToObj = arr => arr.map(value => ({ value }));
const sumAll = arr => arr.reduce((acc, curr) => acc + curr.value, 0);
const compose = (...fns) => x => {
  const reversedFn = fns.reverse();
  return reversedFn.reduce((acc, curr) => curr(acc), x);
};

const originalArr = [2, 4, 2];

// Without compose
const result1 = sumAll(mapToObj(mapToDouble(originalArr)));
// With compose
// Compose is nearer to mathematical notation
const result2 = compose(
  sumAll,
  mapToObj,
  mapToDouble,
)(originalArr);
console.log(`result1: ${result1}`);
console.log(`result2: ${result2}`);
