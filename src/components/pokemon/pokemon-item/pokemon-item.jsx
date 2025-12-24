import './pokemon-item.css';

function PokemonItem({ id, name, imageUrl, types }) {
  return (
    <div className='pokemon-item d-flex flex-column gap-1'>
      <div style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <h3 className='text-capitalize fw-light mb-0 text-break'>{name}</h3>
      <span className='text-muted'>#{id}</span>
      {types?.map(({ imageUrl, name }) => (
        <img src={imageUrl} alt={name}></img>
      ))}
    </div>
  )
}

export default PokemonItem;