// --- Abstract classes ---
// Abstract classes cannot be instantiated directly; they are meant to be subclassed
// They can contain abstract methods (without implementation) that must be implemented by derived classes
// Useful for defining a common interface and shared behavior for subclasses

abstract class StreetFighter {
  constructor() {}

  move() {} // Concrete method: can be used by subclasses

  fight() {
    console.log(`${this.name} attacks with ${this.getSpecialAttack()}`); // Uses abstract methods
  }

  abstract getSpecialAttack(): string; // Abstract method: must be implemented by subclasses

  // --- Abstract accessors ---
  abstract get name(): string; // Abstract accessor: must be implemented by subclasses
}

class Ryu extends StreetFighter {
  // Implementation of abstract method
  getSpecialAttack(): string {
    return 'Hadoken';
  }

  // Implementation of abstract accessor
  get name(): string {
    return 'Ryu';
  }
}

class ChunLi extends StreetFighter {
  // Implementation of abstract method
  getSpecialAttack(): string {
    return 'Lightning Kick';
  }

  // Implementation of abstract accessor
  get name(): string {
    return 'Chun Li';
  }
}

const ryu = new Ryu();
console.log(ryu.getSpecialAttack()); // Hadoken
ryu.fight(); // Ryu attacks with Hadoken

const chunLi = new ChunLi();
chunLi.fight(); // Chun Li attacks with Lightning Kick
