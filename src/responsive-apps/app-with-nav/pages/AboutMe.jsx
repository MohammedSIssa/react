import { PageContext } from "../PageContext";
import { useContext } from "react";

export default function About() {
  const { theme } = useContext(PageContext);

  const isDark = theme === "dark" ? true : false;

  const themeClass = isDark
    ? "text-zinc-50 bg-zinc-600 "
    : "text-zinc-900 bg-zinc-50 ";

  return <div className={themeClass+"page min-h-screen flex gap-0 md:gap-2 flex-col items-center justify-center"}>
    <h1 className="text-5xl sm:text-[70px] md:text-[100px] font-thin lg:text-[200px]">About Me</h1>
    <p className="text-xl md:text-3xl lg:text-5xl font-thin">{"<About />"}</p>
  </div>;
}
