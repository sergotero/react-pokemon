import { useEffect, useState } from 'react';
import * as PokemonService from '../../../services/pokemon-service';
import { NavLink } from 'react-router';

import './pokemon-types.css';

function PokemonTypes() {
  const [types, setTypes] = useState([]);

  useEffect(() => {

    async function fetchTypes() {
      const types = await PokemonService.listTypes();
      setTypes(types);
    }

    fetchTypes();
  }, []);

  return (
    <div className="pokemon-types d-flex flex-wrap gap-2">
      {types.map(({ id, name, imageUrl }) => (
        <NavLink key={id} to={`/types/${id}`}><img src={imageUrl} alt={name} /></NavLink>
      ))}
    </div>
  );
}

export default PokemonTypes;