import Block from "./Block";
import { CurrentPlayerContext } from "./CurrentPlayer";
import { useState } from "react";

export default function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameData, setGameData] = useState(new Array(9).fill(""));
  const [isFinished, setIsFinished] = useState(false);
  const [winner, setWinner] = useState(undefined);
  return (
    <CurrentPlayerContext
      value={{
        currentPlayer,
        setCurrentPlayer,
        gameData,
        setGameData,
        isFinished,
        setIsFinished,
        setWinner,
      }}
    >
      <div className="flex flex-col gap-2 bg-zinc-800 h-dvh w-full items-center pt-10">
        <p className="text-zinc-200 text-xl">
          {isFinished
            ? winner !== undefined
              ? `We have a winner ${winner}`
              : "Draw"
            : "Playing.."}
        </p>
        <div className="flex gap-2">
          <Block idx={0} />
          <Block idx={1} />
          <Block idx={2} />
        </div>
        <div className="flex gap-2">
          <Block idx={3} />
          <Block idx={4} />
          <Block idx={5} />
        </div>
        <div className="flex gap-2">
          <Block idx={6} />
          <Block idx={7} />
          <Block idx={8} />
        </div>
        {isFinished && (
          <button
            className="bg-zinc-700 text-zinc-50 p-2 px-5 rounded-xl mt-10"
            onClick={() => {
              window.location.reload();
            }}
          >
            Restart
          </button>
        )}
      </div>
    </CurrentPlayerContext>
  );
}
