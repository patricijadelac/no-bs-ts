// --- Generics <T> ---
// Allow you to define flexible, reusable types without sacrificing type safety
// Commonly used in functions, classes, interfaces and types

// --- Generic function ---
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [str3getter, str3setter] = simpleState(10);
console.log(str3getter()); // 10
str3setter(62);
console.log(str3getter()); // 62

// --- Generics and type inference ---
// TypeScript infers the generic type from the initial value
// const [str4getter, str4setter] = simpleState(null);
// console.log(str4getter());
// str4setter('str'); // Error: Argument of type '"str"' is not assignable to parameter of type 'null'

// --- Overriding inferred generic type ---
// Explicitly specify the generic type to allow multiple types
const [str4getter, str4setter] = simpleState<string | null>(null);
console.log(str4getter()); // null
str4setter('str'); // OK: string is allowed
console.log(str4getter()); // str

// --- Generic interface ---
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: 'Bulbasaur', hp: 20 },
  { name: 'Megasaur', hp: 5 },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks); // [ { name: 'Megasaur', hp: 5 }, { name: 'Bulbasaur', hp: 20 } ]
