// --- Readonly ---
// Use 'readonly' to make properties immutable after initialization
// Prevents modification of properties after initialization

interface Cat {
  name: string;
  // readonly name: string;
  breed: string;
}

// --- Readonly<Type> Utility Type ---
// Transforms all properties of a type to be readonly
// Useful for creating immutable types from existing ones

type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): ReadonlyCat {
  return {
    name,
    breed,
  };
}

const usul = makeCat('Usul', 'Tabby');
// usul.name = 'Piter'; // Error: Cannot assign to 'name' because it is a read-only property

// --- Readonly tuples ---
// Tuples can be made immutable using the 'readonly' modifier
// Syntax: readonly [Type1, Type2, ...]

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z]; // Returns a readonly tuple
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50; // Error: Cannot assign to '0' because it is a read-only property

// --- Immutable arrays ---
const reallyConst = [1, 2, 3]; // Mutable array
reallyConst[0] = 50; // Allowed: modifies the first element

// Using 'as const' creates a readonly tuple
const reallyConst2 = [1, 2, 3] as const; // Immutable array
// reallyConst2[0] = 50; // Error: Cannot assign to '0' because it is a read-only property

// Key Points:
// 1. Regular arrays are mutable and can be changed.
// 2. 'as const' creates a deeply immutable structure, preventing any modifications.
// 3. Useful for defining constants or configuration values that should not change.
