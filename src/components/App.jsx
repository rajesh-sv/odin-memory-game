import { useCallback, useState } from "react"
import "../styles/App.css"
import Header from "./Header"
import Score from "./Score"
import CardsContainer from "./CardsContainer"
import pokemonList from "./data.js"

function App() {
  const [pokemonsClicked, setPokemonsClicked] = useState(new Set())
  const [bestScore, setBestScore] = useState(0)
  const handleCardClick = useCallback(
    (pokemonName) => {
      function shuffle(arr) {
        for (let i = arr.length - 1; i > 1; i--) {
          const j = Math.floor(Math.random() * i)
          const temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp
        }
      }

      shuffle(pokemonList)

      if (pokemonsClicked.has(pokemonName)) {
        setPokemonsClicked(new Set())
      } else {
        pokemonsClicked.add(pokemonName)
        setPokemonsClicked(new Set(pokemonsClicked))
      }

      setBestScore(Math.max(bestScore, pokemonsClicked.size))
    },
    [pokemonsClicked, bestScore],
  )

  return (
    <>
      <Header />
      <Score score={pokemonsClicked.size} bestScore={bestScore} />
      <CardsContainer
        pokemonList={pokemonList}
        handleCardClick={handleCardClick}
      />
    </>
  )
}

export default App
