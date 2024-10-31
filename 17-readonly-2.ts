// --- Members in constructors ---
class Doggy {
  // public name: string = '';
  // constructor(name: string, age: number) {
  //   this.name = name;
  // }

  // ✨ Better: Using shorthand syntax for property declaration
  // constructor(public name: string, public age: number) {}

  // --- Readonly member fields ---
  constructor(public readonly name: string, public age: number) {} // 'name' is readonly, cannot be changed after initialization
}

const lg2 = new Doggy('LG', 13);
// lg2.name = 'Foo'; // Error: Cannot assign to 'name' because it is a read-only property
console.log(lg2.name); // LG

class DogList {
  private doggies: Doggy[] = [];

  // --- Static member fields ---
  static instance: DogList = new DogList(); // Singleton instance of DogList (only one DogList can exist)

  private constructor() {} // Private constructor to prevent instantiation from outside the class

  // --- Static methods ---
  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.instance; // Accessing the singleton instance
DogList.addDog(lg2);
console.log(DogList.instance.getDogs()); // [ Doggy { name: 'LG', age: 13 } ]

// const dl = new DogList(); // Error: Constructor of class 'DogList' is private and only accessible within the class declaration
