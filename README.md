# React Pokemon 🎮

Una aplicación React interactiva para explorar y visualizar Pokémon con navegación dinámica y datos detallados.

## 🎯 Objetivo del Proyecto

Crear una aplicación React que muestre las páginas `/pokemons` y `/pokemon/:id` utilizando React Router y hooks de React.

## 📋 Requisitos Funcionales

### Página Principal (`/pokemons`)

- Cargar el listado de pokémons desde `src/data/pokemons.json`
- Mostrar un pokémon aleatorio cada 3 segundos (rotación automática)
- Al hacer clic sobre el pokémon, navegar a su página de detalle

### Página de Detalle (`/pokemon/:id`)

- Mostrar información completa del pokémon seleccionado
- Incluir un enlace para volver a la página principal

## 🏗️ Estructura de Componentes

```
src/
├── pages/
│   ├── PokemonsPage.jsx    # Página principal con rotación automática
│   └── PokemonDetail.jsx   # Página de detalle del pokémon
├── components/
│   └── PokemonCard.jsx     # Componente reutilizable con prop 'full' (boolean)
├── data/
│   └── pokemons.json       # Base de datos de pokémons
└── App.jsx                 # Configuración de rutas
```

## 🛠️ Tecnologías Requeridas

- **react-router-dom** - Navegación entre páginas
- **Hooks necesarios**: `useState`, `useEffect`

## 📦 Instalación y Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Instalar React Router

```bash
npm install react-router-dom
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🚀 Guía de Construcción

### Paso 1: Configurar React Router en `App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsPage from "./pages/PokemonsPage";
import PokemonDetail from "./pages/PokemonDetail";

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
```

### Paso 2: Crear `PokemonCard` Component

```jsx
// src/components/PokemonCard.jsx
function PokemonCard({ pokemon, full = false }) {
  // Si full=false: vista simplificada
  // Si full=true: vista completa con todos los detalles

  return (
    <div className="pokemon-card">
      {/* Renderiza según el valor de 'full' */}
    </div>
  );
}
```

### Paso 3: Implementar `PokemonsPage`

```jsx
// src/pages/PokemonsPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pokemonsData from "../data/pokemons.json";

function PokemonsPage() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar pokémon aleatorio inicial
    // Configurar intervalo de 3 segundos
    // Limpiar intervalo al desmontar
  }, []);

  const handlePokemonClick = () => {
    navigate(`/pokemon/${currentPokemon.id}`);
  };

  return <div>{/* Mostrar PokemonCard con full={false} */}</div>;
}
```

### Paso 4: Implementar `PokemonDetail`

```jsx
// src/pages/PokemonDetail.jsx
import { useParams, Link } from "react-router-dom";
import pokemonsData from "../data/pokemons.json";

function PokemonDetail() {
  const { id } = useParams();
  const pokemon = pokemonsData.find((p) => p.id === parseInt(id));

  return (
    <div>
      {/* Mostrar PokemonCard con full={true} */}
      <Link to="/pokemons">← Volver a la lista</Link>
    </div>
  );
}
```

## 📚 Recursos Útiles

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)

---

**¡Buena suerte construyendo tu Pokédex! 🌟**
