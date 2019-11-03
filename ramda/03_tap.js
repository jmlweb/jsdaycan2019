const R = require('ramda');

const myPipeline = R.pipe(
  R.path(['products', 'wines']),
  R.tap(console.log),
);

const selectedWines = myPipeline({
  id: '123u3472r3h',
  date: '2019-11-02',
  products: {
    wines: [
      'Riesling',
      'Chardonnay',
      'Syrah',
      'Sauvignon blanc',
      'Cabernet sauvignon',
      'Pinot noir',
    ],
  },
});

module.exports = selectedWines;
