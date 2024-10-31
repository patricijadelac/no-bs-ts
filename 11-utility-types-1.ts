// --- Partial<Type> Utility Type ---
// Makes all properties of a type optional
// Eliminates need to maintain separate interfaces

interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

// ❌ Without Partial - requires manual updates when MyUser interface changes
// interface MyUserOptionals {
//   name?: string;
//   id?: number;
//   email?: string;
// }

// ✅ With Partial - automatically handles all properties
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: 'Jack',
      id: 1,
      email: 'dontemail@dontemail.com',
    },
    {
      email: 'dontemailbaz@dontemail.com',
    }
  )
);
// { name: 'Jack', id: 1, email: 'dontemailbaz@dontemail.com' }

// --- Required<Type> Utility Type ---
// Makes all properties required (removes optional flags)
// Opposite of Partial<Type>

type RequiredMyUser = Required<MyUser>;

// --- Pick<Type> Utility Type ---
// Creates a type by selecting specific properties
// Syntax: Pick<Type, 'prop1' | 'prop2'>
// Useful for creating smaller types from larger ones

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

// --- Record<Keys, Type> Utility Type ---
// Creates an object type with specified keys and value type
// Keys can be string, number, or union of literals

const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

console.log(
  mapById([
    { id: 1, name: 'Mr. Foo' },
    { id: 2, name: 'Mrs. Baz' },
  ])
);
// { '1': { id: 1, name: 'Mr. Foo' }, '2': { id: 2, name: 'Mrs. Baz' } }

// --- Omit<Type, Keys> Utility Type ---
// Creates a type by excluding specified properties
// Useful for removing sensitive or unnecessary fields
// Opposite of Pick<Type>, which includes only specified properties

type UserWithoutID = Omit<MyUser, 'id'>;

const mapById2 = (users: MyUser[]): Record<string, UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById2([
    { id: 1, name: 'Mr. Foo' },
    { id: 2, name: 'Mrs. Baz' },
  ])
);
// { '1': { name: 'Mr. Foo' }, '2': { name: 'Mrs. Baz' } }

// --- Types from fields ---
// Allows referencing types directly from object properties
// Example: MyUser['id'] extracts the type of the 'id' property
// Ensures type safety: if 'id' type changes, the Record type updates automatically
// Useful for creating dynamic types based on existing structures

const mapById3 = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
  // MyUser['id'] ensures the Record key type matches the 'id' type in MyUser

  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById3([
    { id: 1, name: 'Mr. Foo' },
    { id: 2, name: 'Mrs. Baz' },
  ])
);
// { '1': { name: 'Mr. Foo' }, '2': { name: 'Mrs. Baz' } }
