import { Navbar } from "./components/ui";
import { Routes, Route } from "react-router";
import { HomePage, LoginPage, PokemonDetailPage, PokemonesByTypePage, RegisterPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemones/:id" element={<PokemonDetailPage />} />
        <Route path="/types/:id" element={<PokemonesByTypePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </>
  );
}

export default App;
