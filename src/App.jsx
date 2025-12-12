import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokemonsPage from "./pages/pokemons-page.jsx";
import PokemonDetail from "./pages/pokemon-details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/" element={<Navigate to="/pokemons" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
