import { useParams } from "react-router";
import { PageLayout } from "../components/layouts";
import { PokemonList, PokemonTypes } from "../components/pokemon";

function PokemonesByTypePage() {
  const { id: type } = useParams();

  return (
    <PageLayout>
      <PokemonTypes />
      <PokemonList className="mt-5" type={type} withPages={false} />
    </PageLayout>
  )
}

export default PokemonesByTypePage;