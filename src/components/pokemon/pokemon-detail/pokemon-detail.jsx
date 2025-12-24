import { useEffect, useState } from "react";
import * as PokemonService from '../../../services/pokemon-service';
import { useNavigate } from "react-router";
import PokemonItem from "../pokemon-item/pokemon-item";


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

  return pokemon && (
    <div style={{ maxWidth: '150px' }}>
      <PokemonItem {...pokemon} />
    </div>
  )
}

export default PokemonDetail;