const R = require('ramda');

const hasProperty = prop => src => src && src[prop];

const split = separator => str =>
  hasProperty('split')(str) ? str.split(separator) : '';

const length = str => (hasProperty('length')(str) ? str.length : 0);

const countWords = R.pipe(
  split(' '),
  length,
);

const getResultStr = name => `Your name has ${countWords(name)} words!`;

const makeQuestion = interface => title => cb =>
  interface.question(title, input => {
    cb(input);
    interface.close();
  });

const askName = interface => cb =>
  makeQuestion(interface)(`What's your name? `)(
    R.pipe(
      getResultStr,
      cb,
    ),
  );

// MOCKED INTERFACE

const readlineInterface = {
  // question: (_, cb) => cb(undefined),
  question: (_, cb) => cb('José Manuel'),
  close: () => {},
};

askName(readlineInterface)(console.log);
