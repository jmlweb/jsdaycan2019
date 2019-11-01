const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question(`What's your name? `, name => {
  console.log(`Your name has ${name.split(' ').length} words!`);
  readlineInterface.close();
});
