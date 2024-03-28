import "../styles/CardsContainer.css"
import Card from "./Card"

export default function CardsContainer({ pokemonList, handleCardClick }) {
  return (
    <div className="cards-container">
      {pokemonList.map((pokemon) => (
        <Card
          key={pokemon.name}
          pokemonName={pokemon.name}
          pokemonImageUrl={pokemon.imageUrl}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  )
}
