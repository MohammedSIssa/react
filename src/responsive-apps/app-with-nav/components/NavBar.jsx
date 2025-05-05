import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

import { useContext } from "react";
import { PageContext } from "../PageContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(PageContext);

  const cName = isOpen ? "flex flex-col gap-5 " : "hidden ";
  const isDark = theme === "dark" ? true : false;

  const themeClass = isDark
    ? "text-zinc-50 bg-zinc-600 "
    : "text-zinc-900 bg-zinc-50 ";

  return (
    <div
      className={
        themeClass +
        "navbar fixed top-0 h-fit md:h-18 left-0 flex flex-row md:items-center px-5 py-2 md:py-0  w-full border-0 border-b-1 border-zinc-400"
      }
    >
      <button
        className="w-10 h-10 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen || <Hamburger />}
        {isOpen && <CrossIcon />}
      </button>
      <div
        className={
          cName +
          "md:flex md:flex-row md:w-full md:h-[100px] md:items-center md:justify-between md:px-5 py-5 ml-5 md:ml-0 md:py-0"
        }
      >
        <ul className="flex flex-col gap-5 md:flex-row">
          <li>Home</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>

        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <ThemeIcon />
        </button>
      </div>
    </div>
  );

  function Hamburger() {
    return (
      <>
        {isDark && <RxHamburgerMenu color="white" size={25} />}
        {isDark || <RxHamburgerMenu color="#242424" size={25} />}
      </>
    );
  }

  function CrossIcon() {
    return (
      <>
        {isDark && <RxCross2 color="white" size={25} />}
        {isDark || <RxCross2 color="#242424" size={25} />}
      </>
    );
  }

  function ThemeIcon() {
    return (
      <>
        {isDark && <CiLight color="white" size={30} />}
        {isDark || <CiDark color="#242424" size={30} />}
      </>
    )
  }
}
