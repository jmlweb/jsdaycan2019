const R = require('ramda');

const data = {
  price: 1245,
  hours: 15,
};

const getPricePerHour = R.pipe(
  R.values,
  R.apply(R.divide),
);

console.log(getPricePerHour(data));
