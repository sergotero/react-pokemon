import PokemonDetail from "../pages/pokemon-details";

// src/components/PokemonCard.jsx
function PokemonCard({ pokemon, full = false, seeDetails }) {
  // Si full=false: vista simplificada
  // Si full=true: vista completa con todos los detalles

  if (pokemon === null) {
    return (
      <div className="loading">
        LOADING...
      </div>
    );
  } else {
    if (!full) {
      return (
      <div className="PokemonCard" onClick={seeDetails}>
        <img src={pokemon.image.hires} alt={pokemon.name.english} />
      </div>
      );
    } else {
      return (
        <div className="PokemonCard full" onClick={seeDetails}>
          <div>
            <img src={pokemon.image.hires} alt={pokemon.name.english} />
          </div>
          <h2>{pokemon.name.english}</h2>
          <p>{pokemon.description}</p>
        </div>
      );
    }
  }

}

export default PokemonCard;