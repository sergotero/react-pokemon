import { Navbar } from "./components/ui";
import { Routes, Route } from "react-router";
import { HomePage, PokemonDetailPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemones/:id" element={<PokemonDetailPage />} />
      </Routes>

    </>
  );
}

export default App;
