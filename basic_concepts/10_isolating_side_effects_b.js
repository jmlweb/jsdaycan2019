const readline = require('readline');
const R = require('ramda');

const countWords = str => str.split(' ').length;

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

// REAL INTERFACE

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askName(readlineInterface)(console.log);
