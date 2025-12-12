// src/pages/PokemonsPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pokemonsData from "./../data/pokemons.json";
import PokemonCard from "./../components/pokemon-card.jsx";

function PokemonsPage() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar pokémon aleatorio inicial
    // Configurar intervalo de 3 segundos
    const idInterval = setInterval(() => {
      const random = Math.floor(Math.random() * pokemonsData.length);
      const pokemon = pokemonsData[random];
      setCurrentPokemon(pokemon);
    }, 3000);
    // Limpiar intervalo al desmontar
    return () =>{ 
      clearInterval(idInterval);
    }
  }, []);

  const handlePokemonClick = () => {
    navigate(`/pokemon/${currentPokemon.id}`);
  };

  return (
    <div>
      <PokemonCard pokemon={currentPokemon} full={false} seeDetails={handlePokemonClick} />
    </div>
  );;
}

export default PokemonsPage;