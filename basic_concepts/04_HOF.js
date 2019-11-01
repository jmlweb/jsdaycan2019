// Apply receives two arguments:
// 1) The function to be called
// 2) The argument (or array of arguments) to be passed to the first arg function
const apply = (fn, x) => fn(x);
apply(console.log, 2);

// Receives an argument. Returns a function, which receives another argument
// Then, it adds both numbers
const makeSumOf = x => y => x + y;
const sum2 = makeSumOf(2);
console.log(sum2(1));
console.log(sum2(2));
