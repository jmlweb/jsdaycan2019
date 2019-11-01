const multiply = (a, b) => a * b;

const curriedMultiply = (...args) => {
    if (args.length === 2) {
        return multiply(...args);
    }
    return b => multiply(...[...args, b]);
}

console.log(curriedMultiply(2, 3));
console.log(curriedMultiply(2)(3));
const multiplyBy2 = curriedMultiply(2);
const multiplyBy3 = curriedMultiply(3);
const sourceArr = [1,2,3];
console.log(sourceArr.map(multiplyBy2));
console.log(sourceArr.map(multiplyBy3));