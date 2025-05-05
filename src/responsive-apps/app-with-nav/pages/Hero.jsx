import { useContext } from "react";
import { PageContext } from "../PageContext";

export default function Hero() {
  const { theme } = useContext(PageContext);
  const isDark = theme === "dark" ? true : false;

  const themeClass = isDark
    ? "text-zinc-50 bg-zinc-700 "
    : "text-zinc-900 bg-zinc-200 ";

  return (
    <div
      className={
        themeClass +
        "page min-h-screen flex flex-col items-center justify-center gap-0 md:gap-2 pt-12 md:pt-18"
      }
    >
      <h1 className="text-6xl sm:text-[70px] md:text-[100px] font-thin lg:text-[200px]">
        Hello {":)"}
      </h1>
      <p className="text-xl md:text-3xl lg:text-5xl font-thin">{"<Hero />"}</p>
    </div>
  );
}
