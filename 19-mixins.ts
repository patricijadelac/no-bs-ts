// --- Mixins ---
// Mixins are a way to create reusable pieces of functionality that can be added to classes

// Functions creating functions
function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction();
logger('your string'); // your string

// Functions creating classes
function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = '';

    log(str: string) {
      console.log(str);
      this.completeLog += str + '\n';
    }

    dumpLog() {
      return this.completeLog;
    }
  };
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log('Foo'); // Foo
console.log(logger2.dumpLog()); // Foo

// Functions creating a generic class
function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string): T {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const stb1 = new StringDatabase();
stb1.set('a', 'Hello');

// Creating a mixin
type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const stb2 = new DumpableStringDatabase();
stb2.set('Jack', 'Hello Jack');
stb2.dump(); // { Jack: 'Hello Jack' }
