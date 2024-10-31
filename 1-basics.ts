// --- String ---
let userName: string = 'Jack';
userName += ' Herrington'; // Jack Herrington

// --- Boolean ---
let hasLoggedIn: boolean = true;
// hasLoggedIn += ' Herrington'; // Error: Type 'string' is not assignable to type 'boolean'

// --- Number ---
let myNumber: number = 10;

// --- RegExp ---
// The RegExp object is used for matching text with a pattern
let myRegex: RegExp = /foo/;

// --- Array ---
const names = userName.split(' '); // ['Jack', 'Herrington']

// const myValues: Array<number> = [1, 2, 3, 'abc']; // Error: Type 'string' is not assignable to type 'number'
const myValues: Array<number> = [1, 2, 3]; // Array<T> is a generic type

// --- Object ---
// Interface defines the shape of an object type
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: 'Jack',
  last: 'Herrington',
};

// --- Map ---
const map = {
  10: 'a',
  20: 'b',
};
// map[30] = 'c'; // Error: Property '30' does not exist on type '{ 10: string; 20: string; }'

// Record<K, T> is a utility type in TypeScript for creating an object type with keys of type K and values of type T
const map2: Record<number, string> = {
  10: 'a',
  20: 'b',
};
map2[30] = 'c';

// --- Conditionals & Expressions ---
if (map2[30] === 'D') {
  // TypeScript allows comparison between compatible types (string === string)
}

// if (map2[30] === 20) {...}
// Error: This comparison appears to be unintentional because the types 'string' and 'number' have no overlap

// --- Loops ---
// TypeScript uses type inference in loops, reducing the need for explicit type annotations
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => {
  console.log(v);
});

const out = [1, 2, 3].map((v) => v * 10);
