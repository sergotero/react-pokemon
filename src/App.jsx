import { Navbar } from "./components/ui";
import { Routes, Route } from "react-router";
import { Error403Page, HomePage, LoginPage, PokemonDetailPage, PokemonesByTypePage, RegisterPage, UsersPage } from "./pages";
import { PrivateRoute } from "./guards";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/pokemones/:id" element={<PrivateRoute><PokemonDetailPage /></PrivateRoute>} />
        <Route path="/types/:id" element={<PrivateRoute><PokemonesByTypePage /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute role="admin"><UsersPage /></PrivateRoute>} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/403" element={<Error403Page />} />

      </Routes>

    </>
  );
}

export default App;
