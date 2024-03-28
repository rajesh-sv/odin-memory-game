import "../styles/Card.css"

export default function Card({
  pokemonName,
  pokemonImageUrl,
  handleCardClick,
}) {
  return (
    <div className="card">
      <img
        className="pokemon-image"
        src={pokemonImageUrl}
        alt={"Image of " + pokemonName}
        onClick={() => handleCardClick(pokemonName)}
      />
      <p className="pokemon-name">{pokemonName}</p>
    </div>
  )
}
