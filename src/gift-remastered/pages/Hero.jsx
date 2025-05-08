import { GiLoveLetter } from "react-icons/gi";
import { FaCamera } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero h-screen flex flex-col items-center px-3 din text-rose-950">
      <div className="w-full h-40 text-rose-50 bg-gradient-to-b from-rose-400 to-rose-600 shadow-2xl rounded-4xl m-4 mb-8 px-6 z-50 flex items-center justify-center text-center text-pretty">
        <h1 className="text-3xl">Happy 9 Months Together 🥳</h1>
      </div>
      <div className="w-full h-10 text-rose-950 rounded-4xl m-2 mb-8 z-50 text-center">
        <p>
          It’s been 273 days since the day my world got brighter—the day you
          walked into it. 💞
        </p>
      </div>
      <Memories />
      <LoveMessage />
      <Surprise />
      <p className="z-50 mt-2 font-bold">
        You & Me = Forever {"(Inshallah)"} 🌸
      </p>
    </div>
  );

  function Memories() {
    return (
      <NavLink
        to="/memories"
        className="w-full h-20 memories m-2 rounded-4xl border-1 border-rose-300 z-50 px-7 flex items-center gap-5 text-3xl shadow-lg"
      >
        <FaCamera size={40} />
        Memories
      </NavLink>
    );
  }
  function LoveMessage() {
    return (
      <div className="w-full h-20 love-message m-2 rounded-4xl border-1 border-rose-400 z-50 px-7 flex items-center gap-5 text-3xl shadow-lg">
        <GiLoveLetter size={45} />
        Love Letter
      </div>
    );
  }

  function Surprise() {
    return (
      <div className="surprise h-20 w-full m-2 border-1 border-rose-400 rounded-4xl z-50 px-7 flex items-center gap-5 text-3xl shadow-lg">
        <FaGift size={40} />
        Surprise Gift
      </div>
    );
  }
}
