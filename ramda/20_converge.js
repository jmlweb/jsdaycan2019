const R = require('ramda');
const crypto = require('crypto');

/**
 * String example
 */
const generateEmailWithHash = R.converge(R.concat, [
  R.identity,
  v =>
    crypto
      .createHash('md5')
      .update(v)
      .digest('hex'),
]);

// The equivalent would be less readable
// const generateEmailWithHash2 = v =>
//   `${v}${v =>
//     crypto
//       .createHash('md5')
//       .update(v)
//       .digest('hex')}`;

console.log(generateEmailWithHash('josemanuel@jmlweb.es'));

/**
 * Working with two parts of the same object
 */
const getWinnerPlayer = R.converge(R.find, [
  R.pipe(
    R.prop('winner'),
    R.propEq('id'),
  ),
  R.prop('players'),
]);

// Maybe the previous example is overkill, and could be replaced by:
// const getWinnerPlayer = ({ winner, players }) =>
//   R.find(R.propEq('id', winner), players);

console.log(
  getWinnerPlayer({
    winner: 'player1',
    players: [
      {
        id: 'player1',
        name: 'Greta Thunberg',
      },
      {
        id: 'player2',
        name: 'Donald Trump',
      },
    ],
  }),
);
