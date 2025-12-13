import { useEffect, useState } from 'react';
import PokemonItem from '../pokemon-item/pokemon-item';
import * as PokemonService from '../../../services/pokemon-service';

function PokemonRandom({ refreshInterval = 3 }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const randomIntervalId = setInterval(async () => {
      try {
        const pokemon = await PokemonService.getRandomPokemon();
        setPokemon(pokemon);
      } catch (error) {
        console.error(error)
      }
    }, refreshInterval * 1000);

    return () => clearInterval(randomIntervalId);
  }, [refreshInterval]);

  return pokemon && (
    <div className='row justify-content-center g-2'>
      <div className='col-2'>
        <PokemonItem pokemon={pokemon} />
      </div>
    </div>
  )
}

export default PokemonRandom;
