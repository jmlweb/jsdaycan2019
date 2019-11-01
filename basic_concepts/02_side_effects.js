let myVar = 0;

const myFunc = () => {
  const myDate = new Date(); // We would need to mock the date object for our tests
  const day = myDate.getDate();
  if (day % 2) {
    // we are modifying the external variable here
    myVar += 1;
  } else {
    // what happens if many components rely on this util and tests are executed in parallel?
    myVar -= 1;
  }
};

console.log(`Original: ${myVar}`);
myFunc();
console.log(`Original after first call: ${myVar}`);
myFunc();
console.log(`Original after second call: ${myVar}`);
