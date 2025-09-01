import { useContext } from "react";
import { CurrentPlayerContext } from "./CurrentPlayer";
import { useState } from "react";

export default function Block({ idx }) {
  const {
    currentPlayer,
    setCurrentPlayer,
    gameData,
    setGameData,
    setIsFinished,
    isFinished,
    setWinner,
  } = useContext(CurrentPlayerContext);
  const [data, setData] = useState(null);
  checkGameState();
  return (
    <button
      className="block w-20 h-20 bg-zinc-700"
      onClick={() => {
        if (data === null && !isFinished) {
          setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
          setData(currentPlayer);
          let currentGameData = gameData.slice();
          currentGameData = currentGameData.map((dataItem, i) =>
            i === idx ? (dataItem = currentPlayer) : dataItem
          );
          setGameData(currentGameData);
        }
      }}
    >
      <p className="text-zinc-50 text-4xl">{data}</p>
    </button>
  );

  function checkGameState() {
    if (gameData.every((item) => item !== "")) {
      setIsFinished(true);
    }
    checkWinner();
  }
  function checkWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [2, 5, 8],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningCombos.length; i++) {
      if (
        isNotEmpty([
          gameData[winningCombos[i][0]],
          gameData[winningCombos[i][1]],
          gameData[winningCombos[i][2]],
        ]) &&
        gameData[winningCombos[i][0]] === gameData[winningCombos[i][1]] &&
        gameData[winningCombos[i][0]] === gameData[winningCombos[i][2]]
      ) {
        setIsFinished(true);
        setWinner(currentPlayer === "X" ? "O" : "X");
      }
    }
  }
  function isNotEmpty(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "") {
        return false;
      }
    }
    return true;
  }
}
