// --- Function ---
function addNumbers(a: number, b: number): number {
  return a + b;
}
export default addNumbers;

// --- Any ---
// Represents a value of any type
// Bypasses type checking, which can lead to runtime errors
// Should be avoided when possible to maintain type safety
// Use cases:
// - When working with dynamic content
// - During gradual migration from JavaScript to TypeScript
// - When the type is truly unknown at compile time
// Better alternatives to 'any':
// - Use 'unknown' for values with an unknown type
// - Use union types for values that could be one of several types
// - Use type assertions when you know the type but TypeScript doesn't

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

// --- Default parameters ---
export const addStrings2 = (str1: string, str2: string = 'c'): string =>
  `${str1} ${str2}`;

// --- Union ---
// Union types allow a value to be one of several types
// Use the | (pipe) symbol to define a union
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// --- Void function ---
export const printFormat = (title: string, param: string | number): void =>
  console.log(format(title, param));

// --- Promise function ---
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// --- Rest parameter ---
export const introduce = (salutation: string, ...names: string[]): string =>
  `${salutation} ${names.join(' ')}`;

// --- #1 Misconception about Typescript ---
// TypeScript enforces types at compile time, not at runtime
export function getName(user: { first: string; last: string }): string {
  return `${user.first} ${user.last}`; // TS Error, but would run in JS (example: 4-js-functions-tests.js)
}

export function getName2(user: { first: string; last: string }): string {
  return `${user?.first} ${user?.last}`;
}

export function getName3(user: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
