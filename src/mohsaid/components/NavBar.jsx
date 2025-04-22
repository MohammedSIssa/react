import NavButton from "./NavButton";

export default function NavBar({ activeNavButton, setActiveNavButton }) {

  return (
  <nav>
    <NavButton type="weeks" onClick={() => setActiveNavButton("weeks")} activeNavButton={activeNavButton} />
    <NavButton type="goals" onClick={() => setActiveNavButton("goals")} activeNavButton={activeNavButton} />
  </nav>
  )
}