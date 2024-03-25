import { useState } from "react"
import "../styles/App.css"
import Header from "./Header"
import Score from "./Score"

function App() {
  const [score, setScore] = useState(0)
  return (
    <>
      <Header />
      <Score score={score} />
    </>
  )
}

export default App
