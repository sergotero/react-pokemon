import { Link } from "react-router";


function PokemonItem({ pokemon }) {
  const { id, name, image, description } = pokemon;
  return (
    <div className="card">
      <img src={image.hires} className="card-img-top p-2" alt={name.english} />
      <div className="card-body">
        <Link className="card-title stretched-link" to={`/pokemones/${id}`}><h5 className="mb-1">{name.english}</h5></Link>
        <p className="card-text">{description}</p>
      </div>
    </div>
  )
}

export default PokemonItem;