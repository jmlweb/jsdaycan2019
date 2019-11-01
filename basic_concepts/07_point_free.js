const pipe = (...fns) => x => fns.reduce((acc, curr) => curr(acc), x);

const sum1 = x => x + 1;
const double = x => x * 2;

const originalArr = [1, 2, 3, 4, 5, 6];
const result = originalArr.map(
  pipe(
    sum1,
    double,
  ),
);
console.log(result);
