const { getName, getName2, getName3 } = require('./2-functions');

console.log(getName({ first: 'Jack', last: 'Herrington' })); // Jack Herrington

// Initial error: Running this file directly with Node.js fails
// node 4-js-functions-tests.js
// Error occurs because we're importing from a TypeScript file

// Resolution steps:
// 1. Compile the TypeScript file to JavaScript:
//    npx tsc 2-functions.ts
//    This creates a new JavaScript file: 2-functions.js

// 2. Now run the test file:
//    node 4-js-functions-tests.js
//    This should now execute without errors

// Note: Ensure that the import statement in this file is referencing the compiled .js file, not the .ts file

console.log(getName2()); // undefined undefined
console.log(getName3()); // first last
console.log(getName3({ first: 'Jack', last: 'Herrington' })); // Jack Herrington
