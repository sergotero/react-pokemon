import { PageLayout } from "../components/layouts";
import { PokemonList, PokemonTypes } from "../components/pokemon";

function HomePage() {
  return (
    <PageLayout>
      <PokemonTypes />
      <PokemonList className="mt-5" withPages={true} />
    </PageLayout>
  )
}

export default HomePage;