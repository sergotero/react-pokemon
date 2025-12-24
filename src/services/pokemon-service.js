import axios from 'axios';
import pokemonTypes from '../data/pokemon/types.json';

const http = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});


http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

const parsePokemonDetail = ({ url, name }) => {
  const parts = url.split('/');
  const id = parts[parts.length - 2];
  return {
    id,
    name,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  }
}

const buildPokemonType = (name) => pokemonTypes.find((type) => type.name === name)

export const list = async (page = 0) => {
  const limit = 20;
  const offset = page * limit;
  const { results: pokemones } = await http.get('/pokemon', { params: { offset, limit }});
  return pokemones.map((pokemon) => parsePokemonDetail(pokemon));
}

export const listPokemonsByType = async (type) => {
  const { pokemon: pokemones } = await http.get(`/type/${type}`);
  return pokemones.map(({ pokemon }) => parsePokemonDetail(pokemon))
}

export const listTypes = () => Promise.resolve(pokemonTypes);

export const getPokemonById = async (pokemonId) => {
  const { id, name, stats, types } = await http.get(`/pokemon/${pokemonId}`);
  return {
    id: `${id}`,
    name,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    stats: stats.map(({ stat: { name }, base_stat: value }) => ({
      name,
      value
    })),
    types: types.map(({ type: { name } }) => buildPokemonType(name))
  }
}
