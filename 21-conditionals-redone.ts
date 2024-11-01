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

function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
function fetchPokemon(url: string): Promise<PokemonResults>;
function fetchPokemon(
  url: string,
  cb?: (data: PokemonResults) => void
): unknown {
  if (cb) {
    fetch(url)
      .then((response) => response.json())
      .then(cb);
    return undefined;
  } else {
    return fetch(url).then((response) => response.json());
  }
}

// 1)
// fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (data) => {
//   data.results.forEach((pokemon) => console.log(pokemon.name));
// });

// 2)
(async function () {
  const data = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10');
  data.results.forEach((pokemon) => console.log(pokemon.name));
})();
