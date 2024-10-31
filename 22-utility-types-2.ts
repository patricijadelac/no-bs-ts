type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & {
  fullName: string;
} {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  };
}

// --- Parameters<Type> Utility Type ---
// Extracts the parameter types of a given function type Type
// Returns a tuple type representing the types of the parameters

// --- ReturnType<Type> Utility Type ---
// Extracts the return type of a given function type Type
// Returns the type of the value returned by the function

function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permuteRows(addFullName, [{ first: 'Jack', last: 'Herrington' }])); // [ { first: 'Jack', last: 'Herrington', fullName: 'Jack Herrington' } ]

class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

// --- ConstructorParameters<Type> Utility Type ---
// Extracts the parameter types of a constructor function type
// Returns a tuple type representing the types of the parameters

// --- InstanceType<Type> Utility Type ---
// Extracts the instance type of a class type
// Returns the type of the instance that would be created by the constructor function

function createObjects<T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map((item) => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [{ first: 'LG', last: 'Herrington' }]).map(
    (obj) => obj.fullName
  )
);
// [ 'LG Herrington' ]
