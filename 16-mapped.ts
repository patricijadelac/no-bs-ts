// Using Record to define a flexible object type
type MyFlexibleDogInfo = {
  name: string; // Known property
} & Record<string, string>; // Allows any additional properties with string keys and string values

// Same functionality without using Record
type MyFlexibleDogInfo2 = {
  name: string; // Known property
  [key: string]: string | number; // Allows any additional properties with string keys and values of type string or number
};

const dog: MyFlexibleDogInfo2 = { name: 'LG', breed: 'Mutt', age: 7 };

// --- Mapped types ---
// Allow the creation of new types by transforming properties of existing types
// Syntax: { [P in K]: T } where K is a subset of keys from an existing type

interface DogInfo {
  name: string;
  age: number;
}

// The mapped type `OptionsFlags` takes a type and creates a new type where each property is transformed to a boolean
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>; // { name: boolean; age: boolean; }

// --- Template literal & Capitalize<Type> Utility Type ---
// Template literal type allows the creation of new string literal types based on existing types
// Capitalize utility type transforms the first character of a string type to uppercase

// Mapped type to create listener methods for each property in a given type
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (
    newValue: Type[Property]
  ) => void;
};

// Function to listen to changes in an object's properties
function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw 'Needs to be implemented';
}

const lg: DogInfo = {
  name: 'LG',
  age: 13,
};

// Creating a type for listeners based on DogInfo
type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
