import { useEffect, useState } from 'react';
import * as PokemonService from '../../../services/pokemon-service';
import PokemonItem from '../pokemon-item/pokemon-item';

function PokemonList({ className = '', withPages = false, type }) {
  const [pokemones, setPokemones] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {

    async function fetchPokemones() {
      const pokemones = await (type ? PokemonService.listPokemonsByType(type) : PokemonService.list(page));
      setPokemones(pokemones);
    }
    
    fetchPokemones();
  }, [page, type]);

  const handlePagination = (accumulator) => setPage((page) => page + accumulator)

  return (
    <>
      <div className={`d-flex flex-wrap gap-5 ${className}`}>
        {pokemones?.map((pokemon) => (
          <PokemonItem key={pokemon.id} {...pokemon} />
        ))}
      </div>

      { withPages && (
        <div className="btn-group mt-4" role="group">
          <button type="button" className="btn btn-outline-primary" onClick={() => handlePagination(-1)} disabled={page === 0}><i className='fa fa-angle-left'></i></button>
          <button type="button" className="btn btn-outline-primary" onClick={() => handlePagination(1)}><i className='fa fa-angle-right'></i></button>
        </div>
      )}
    </>
    
  )
}

export default PokemonList;
