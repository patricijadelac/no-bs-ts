// yarn add node-fetch
// yarn add @types/node-fetch

import fetch from 'node-fetch';

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

// --- Conditional types ---
// Conditional types allow for dynamic type definitions based on conditions
// Syntax: T extends U ? X : Y

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResult<T> {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then(cb);
    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then((resp) => resp.json()) as FetchPokemonResult<T>;
  }
}

// 1)
// fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (data) => {
//   data.results.forEach((pokemon) => console.log(pokemon.name));
// });

// 2) Asynchronous function to fetch and log the names of Pokemon
(async function () {
  const data = (await fetchPokemon(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  )) as PokemonResults;
  data.results.forEach((pokemon) => console.log(pokemon.name));
})();

// 3) The following example demonstrates the same functionality as above, but utilizes a generic type
// (async function () {
//   const data = <PokemonResults>(
//     await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10')
//   );
//   data.results.forEach((pokemon) => console.log(pokemon.name));
// })();
