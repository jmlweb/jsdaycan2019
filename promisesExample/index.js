const R = require('ramda');

const getSafeMean = R.ifElse(R.isEmpty, R.always(0), R.mean);

const extractVotesMean = R.pipe(
  R.otherwise(
    R.always({
      data: [],
    }),
  ),
  R.then(
    R.pipe(
      R.propOr([], 'data'),
      R.map(R.propOr(0, 'vote')),
      getSafeMean,
    ),
  ),
);

const mySuccessProm = () =>
  Promise.resolve({
    data: [
      {
        id: 1,
      },
      {
        id: 2,
        vote: 3,
      },
      {
        id: 3,
        vote: 1,
      },
      {
        id: 4,
        vote: 2,
      },
      {
        id: 5,
        vote: 3,
      },
      {
        id: 6,
      },
      {
        id: 7,
        vote: 1,
      },
      {
        id: 8,
        vote: 1,
      },
      {
        id: 9,
        vote: 2,
      },
      {
        id: 10,
        vote: 3,
      },
    ],
  });

const myErrorProm = () => Promise.reject(new Error('5h1t happens'));

const myNulledProm = () => Promise.resolve({ data: null });

extractVotesMean(mySuccessProm()).then(console.log);
