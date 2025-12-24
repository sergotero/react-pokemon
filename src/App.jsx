import { Navbar } from "./components/ui";
import { Routes, Route } from "react-router";
import { HomePage, PokemonDetailPage, PokemonesByTypePage } from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemones/:id" element={<PokemonDetailPage />} />
        <Route path="/types/:id" element={<PokemonesByTypePage />} />
      </Routes>

    </>
  );
}

export default App;
