// --- Interface implementation ---
// Defines a contract for classes to follow
// Ensures that classes implement specified methods

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

// --- Member visibility ---
// Controls access to class members (public, private, protected)
// By default, class members are public

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

const myDB = new InMemoryDatabase();
myDB.set('foo', 'bar');
// myDB.db['foo'] = 'baz'; // Error: Property 'db' is private and only accessible within class 'InMemoryDatabase'
console.log(myDB.get('foo')); // bar

// --- Extending classes ---
// Allows a class to inherit properties and methods from another class

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB2 = new PersistentMemoryDB();
myDB2.set('foo', 'bar');
console.log(myDB2.get('foo')); // bar
const saved = myDB2.saveToString();
myDB2.set('foo', 'db1 - bar');
console.log(myDB2.get('foo')); // db1 - bar
const myDB3 = new PersistentMemoryDB();
myDB3.restoreFromString(saved);
console.log(myDB3.get('foo')); // bar
