// --- Enums ---
// Enums are a way to define a set of named constants
// Can be numeric or string-based

// const beforeLoad = 'beforeLoad';
// const loading = 'loading';
// const loaded = 'loaded';

enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}

// const englishLoadingStates = {
//   [LoadingState.beforeLoad]: 'Before Load',
// };

const isLoading = (state: LoadingState) => state === LoadingState.loading;

// console.log(isLoading('dog')); // Error: Argument of type '"dog"' is not assignable to parameter of type 'LoadingState'
console.log(isLoading(LoadingState.beforeLoad)); // false

// --- Literal types ---
// Literal types allow you to specify exact values a variable can hold
// Useful for creating more specific types and enhancing type safety

// Numeric literal types
// Function that accepts only specific numbers (1, 2, or 3)
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;

  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }

  return pip;
}
// console.log(rollDice(4)); // Error: Argument of type '4' is not assignable to parameter of type '1 | 2 | 3'
console.log(rollDice(3));

// String literal types
// Function overloads for specific event names
function sendEvent2(name: 'addToCart', data: { productId: number }): void;
function sendEvent2(name: 'checkout', data: { cartCount: number }): void;
function sendEvent2(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent2('addToCart', { productId: 1 }); // addToCart: {"productId":1}
