import weeksSVG from "../assets/weeks.svg";
import goalsSVG from "../assets/goals.svg";

export default function NavButton({ type, onClick, activeNavButton }) {
  switch (type) {
    case "weeks":
      return (
        <button
          onClick={onClick}
          style={{
            backgroundColor: activeNavButton === "weeks" ? "#333" : "",
          }}
        >
          <img src={weeksSVG} alt="" />
        </button>
      );
    case "goals":
      return (
        <button
          onClick={onClick}
          style={{
            backgroundColor: activeNavButton === "goals" ? "#333" : "",
          }}
        >
          <img src={goalsSVG} alt="" />
        </button>
      );
  }
}
