let myVar = 0;

const myFunc = (day, currentVal) =>
  day % 2 ? (currentVal += 1) : (currentVal -= 1);

const myDate = new Date();
const myDay = myDate.getDate();
const result = myFunc(myDay, myVar);

console.log(`Original: ${myVar}`);
console.log(`Original after first call: ${myVar}`);
console.log(`Result of function call: ${result}`);
/**
 * This is good for testing purposes, as we don't depend on the real date or state anymore
 */
console.log(`First custom call: ${myFunc(3, 1)}`);
console.log(`Second custom call: ${myFunc(3, 2)}`);
