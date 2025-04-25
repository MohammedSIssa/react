import { useContext } from "react";
import { PageContext } from "../PageContext";
import { Lightbulb } from "lucide-react";
import { Moon } from "lucide-react";
import { Atom } from "lucide-react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

export default function Navigation() {
  const { state, dispatch } = useContext(PageContext);
  return (
    <nav className="nav-bar">
      <div className="logo">
        <NavLink to="/">
          <Atom size={38} color={state.theme === "dark" ? "#53c8ff" : "steelblue" } />
        </NavLink>
      </div>

      <div className="links">
        <ul>
          <li>
            <NavLink to="/learn">Learn</NavLink>
          </li>
          <li>
            <NavLink to='/community'>Community</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
        </ul>
      </div>

      <button
        id="change-theme-btn"
        onClick={() => dispatch({ type: "toggle_theme" })}
      >
        {state.theme === "dark" ? (
          <Lightbulb size={30} color="#fff" />
        ) : (
          <Moon size={30} />
        )}
      </button>
    </nav>
  );
}
