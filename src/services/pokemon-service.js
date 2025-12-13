import pokemones from '../data/pokemons.json';

export const getRandomPokemon = () => {
  return new Promise((resolve, reject) => {
    console.info('Getting random pokemon');
    if (Math.random() > 0.7) {
      reject(new Error("FAAAAAAIL!!"))
    } else {
      const pokemonId = Math.floor(Math.random() * pokemones.length) + 1;
      const pokemon = pokemones.find(({ id }) => pokemonId === id);
      resolve(pokemon);
    }
  })
}

export const getPokemonById = (pokemonId) => {
  return new Promise((resolve, reject) => {
    const pokemon = pokemones.find(({ id }) => id == pokemonId);
    if (pokemon) resolve(pokemon);
    else reject(new Error("Pokemon not found"))
  })
}
