// --- Making key and value generic ---
// Allows for flexible data types for keys and values in the database

interface Database2<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable2 {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKey = string | number | symbol;

class InMemoryDatabase2<T, K extends DBKey> implements Database2<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB2<T, K extends DBKey>
  extends InMemoryDatabase2<T, K>
  implements Persistable2
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB4 = new PersistentMemoryDB2<number, string>();
myDB4.set('foo', 22);
console.log(myDB4.get('foo')); // 22
