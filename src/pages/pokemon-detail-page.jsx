import { useParams } from "react-router";
import { PageLayout } from "../components/layouts";
import { PokemonDetail } from "../components/pokemon";

function PokemonDetailPage() {
  const { id } = useParams();

  return (
    <PageLayout>
      <PokemonDetail id={id} />
    </PageLayout>
  )
}

export default PokemonDetailPage;