import Card from "./components/Card";
import { useState } from "react";
import './game.css'
import { cardsData } from "./cardsData";

let highestScore = 0;

export default function CardsGame() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  if (score >= highestScore) {
    highestScore = score;
  }
  if (score === cardsData.length) {
    return (
      <div className="container">
        <h1>You Won!</h1>
        <h2>Your Score: {score}</h2>
        <button
            className="restart"
            onClick={() => {
              setIsGameOver(false);
              setScore(0);
            }}
          >
            <h1>Restart</h1>
          </button>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>Score: {score} </h2>
      <h2>Highest Score: {highestScore}</h2>
      <div className="cards">
      {!isGameOver &&
        cardsData.map((card) => (
          <Card
            key={card.background}
            text={card.text}
            image={card.image}
            setIsGameOver={setIsGameOver}
            setScore={setScore}
            style={card.background}
          />
        ))}
        </div>
      {isGameOver && (
        <div className="container">
          <h1>You Lost!</h1>
          <button
            className="restart"
            onClick={() => {
              setIsGameOver(false);
              setScore(0);
            }}
          >
            <h1>Restart</h1>
          </button>
        </div>
      )}
    </div>
  );
}
