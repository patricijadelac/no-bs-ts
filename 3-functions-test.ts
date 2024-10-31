import addNumbers, {
  addStrings,
  addStrings2,
  format,
  getName,
  introduce,
  printFormat,
} from './2-functions';

console.log(addNumbers(1, 2));
// console.log(addNumbers(1, 'Jack')); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

console.log(addStrings('a', 'b'));
console.log(addStrings2('a'));

console.log(format('a', 2));
printFormat('a', 2);

console.log(introduce('Hello', 'Jack', 'Herrington'));

console.log(getName({ first: 'Jack', last: 'Herrington' }));
