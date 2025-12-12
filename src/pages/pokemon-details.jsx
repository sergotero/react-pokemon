// src/pages/PokemonDetail.jsx
import { useParams, Link } from "react-router-dom";
import pokemonsData from "../data/pokemons.json";

function PokemonDetail() {
  const { id } = useParams();
  const pokemon = pokemonsData.find((p) => p.id === parseInt(id));
  
  return (
    <div className="PokemonDetail">
    <div>
      <img src={pokemon.image.thumbnail} alt={pokemon.name.english} />
    </div>
    <div>
      <h3>{pokemon.name.english}</h3>
      <p><i>{pokemon.species}</i></p>
      <p>{pokemon.description}</p>
      {<p>
        <strong>Type: </strong>{pokemon.type.reduce((types, type, index) => {
          if(type.length === 0 || index === type.length -1) {
            types += type;
          } else {
            types += type + ", ";
          }
          return types;
        }, "")} <br />
        <strong>HP: </strong>{pokemon.base.HP} <br />
        <strong>Attack: </strong>{pokemon.base.Attack} <br />
        <strong>Defense: </strong>{pokemon.base.Defense} <br />
      </p>}
    </div>
      <Link to="/pokemons">← Volver a la lista</Link>
    </div>
  );


}

export default PokemonDetail;