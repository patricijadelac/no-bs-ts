// --- Tuples ---
// Fixed-length arrays where each element has a specific type
// Ordered: type at each index is known
// Syntax: [type1, type2, ...]
// Useful for returning multiple values

type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinates(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log(add3DCoordinates([0, 0, 0], [10, 20, 30])); // [ 10, 20, 30 ]

// --- Tuples with different types ---
// Common in React: useState returns a tuple
function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;

  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState('Hello');
console.log(str1getter()); // Hello
str1setter('Goodbye');
console.log(str1getter()); // Goodbye

const [str2getter, str2setter] = simpleStringState('Jack');
console.log(str2getter()); // Jack
