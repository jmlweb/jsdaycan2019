const checkResult = (firstVar, secondVar) => firstVar === secondVar ? 'equal' : 'not equal';

const a = { foo: 'bar' };
const b = { foo: 'bar' };
console.log(`"a" and "b" are ${checkResult(a, b)}`);
console.log(a);
console.log(b);

const c = { foo: 'bar' };
const d = c;
d.foo = 'baz'; 
console.log(`"c" and "d" are ${checkResult(c, d)}`);
console.log(c);
console.log(d);

const e = { foo: 'bar' };
const f = { ...e, foo: 'baz' }; // or Object.assign({}, e);
console.log(`"e" and "f" are ${checkResult(e, f)}`);
console.log(e);
console.log(f);