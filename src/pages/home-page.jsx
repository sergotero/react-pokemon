import { PageLayout } from "../components/layouts";
import { PokemonRandom } from "../components/pokemon";

function HomePage() {
  return (
    <PageLayout>
      <PokemonRandom refreshInterval={1}/>
    </PageLayout>
  )
}

export default HomePage;