import { useState } from "react"
import "../styles/App.css"
import Header from "./Header"
import Score from "./Score"
import CardsContainer from "./CardsContainer"

function App() {
  const [score, setScore] = useState(0)
  return (
    <>
      <Header />
      <Score score={score} />
      <CardsContainer />
    </>
  )
}

export default App
