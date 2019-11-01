const R = require('ramda');

const countWords = R.pipe(
  R.split(' '),
  R.length,
);

const getResultStr = R.pipe(
  countWords,
  nWords => `Your name has ${nWords} words!`,
);

const makeQuestion = R.curry((interface, title, cb) =>
  interface.question(
    title,
    R.pipe(
      cb,
      R.tap(() => interface.close()),
    ),
  ),
);

const askName = R.curry((interface, cb) =>
  makeQuestion(
    interface,
    `What's your name? `,
    R.pipe(
      getResultStr,
      cb,
    ),
  ),
);

// MOCKED INTERFACE

const readlineInterface = {
  // question: (_, cb) => cb(undefined),
  question: (_, cb) => cb('José Manuel'),
  close: R.identity,
};

askName(readlineInterface, console.log);
