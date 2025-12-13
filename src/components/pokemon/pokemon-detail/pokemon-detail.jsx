import { useEffect, useState } from "react";
import * as PokemonService from '../../../services/pokemon-service';
import { useNavigate } from "react-router";


function PokemonDetail({ id }) {
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemon = await PokemonService.getPokemonById(id);
        setPokemon(pokemon);
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    }

    fetchPokemon();
  }, [id]);

  return (<p>{pokemon?.name.english}</p>)
}

export default PokemonDetail;