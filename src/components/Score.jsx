import "../styles/Score.css"
import { useRef } from "react"

export default function Score({ score }) {
  const bestScore = useRef(0)
  bestScore.current = Math.max(bestScore.current, score)

  return (
    <div className="score-card">
      <h2>Score: {score}</h2>
      <h2>Best Score: {bestScore.current}</h2>
    </div>
  )
}
