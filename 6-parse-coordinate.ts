interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

// --- Function overloading ---
// Allows multiple function signatures for the same function
// Provides type-safe way to handle different input types
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'string') {
    (arg1 as string).split(';').forEach((str) => {
      const [key, value] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(value, 10);
    });
  } else if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}
console.log(parseCoordinate('x:12;y:22')); // { x: 12, y: 22 }
console.log(parseCoordinate({ x: 52, y: 35 })); // { x: 52, y: 35 }
console.log(parseCoordinate(10, 20)); // { x: 10, y: 20 }

// --- Unknown ---
// Represents any value, like 'any', but safer
// No operations allowed without type checking
// Must narrow type before use (e.g., type guards)
// Useful for values of uncertain type (API responses, user inputs)
// Encourages explicit type checking

// --- 'as' keyword (Type Assertion) ---
// Tells TypeScript to treat a value as a specific type
// Use with caution - bypasses type checking
