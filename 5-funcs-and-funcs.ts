// --- Function parameters ---
function printToFile(text: string, callback: () => void): void {
  console.log(text); // Jack Herrington
  callback();
}

// --- Function with params ---
function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}
console.log(arrayMutate([1, 2, 3], (v) => v * 10)); // [ 10, 20, 30 ]

// --- Function as type ---
type MutationFunction = (v: number) => number;

function arrayMutate2(numbers: number[], mutate: MutationFunction): number[] {
  return numbers.map(mutate);
}

// const myNewMutateFunc: MutationFunction = (v: string) => `${v}`; // Error: Type 'number' is not assignable to type 'string'
const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

// --- Returning functions ---
type AdderFunction = (v: number) => number;

function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55)); // 56
