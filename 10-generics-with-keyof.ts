// --- Using keyof with Generics ---
// The keyof operator, when used with generics, allows you to refer to the keys of an object type

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: 'Mimi', age: 12 },
  { name: 'LG', age: 13 },
];

console.log(pluck(dogs, 'age')); // [ 12, 13 ]
console.log(pluck(dogs, 'name')); // [ 'Mimi', 'LG' ]

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCard: BaseEvent & {
    quantity: number;
    productID: string;
  };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent('addToCard', {
  time: 10,
  user: 'baz',
  quantity: 1,
  productID: 'foo',
});
// [ 'addToCard', { time: 10, user: 'baz', quantity: 1, productID: 'foo' } ]

sendEvent('checkout', {
  time: 20,
  user: 'bob',
});
// [ 'checkout', { time: 20, user: 'bob' } ]
