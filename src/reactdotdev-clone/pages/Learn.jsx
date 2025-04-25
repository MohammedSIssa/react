import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import InstallationPage from "./learn/InstallationPage";
import TicTacToe from "./learn/TicTacToe";

import './Learn.css'
import QuickStart from "./learn/QuickStart";
import LessonErrorPage from "./learn/LessonErrorPage";
import { useContext } from "react";
import { PageContext } from "../PageContext";
import DescribingTheUI from "./learn/DescribingTheUI";

function Learn() {
  const { state } = useContext(PageContext)
  return (
    <div className={"learn-page" + " " + state.theme}>
      <nav className={"learning-nav" + " " + state.theme}>
        <ul>
          <h4>GETTING STARTED</h4>
          <li>
            <NavLink to='/learn' end className={({ isActive }) => (isActive ? "active" : "")}>Quickstart</NavLink>
          </li>
          <li>
            <NavLink to="/learn/installation">Installation</NavLink>
          </li>
          <li>
            <NavLink to='/learn/tic-tac-toe-tutorial'>Tic Tac Toe</NavLink>
          </li>
          <h4>LEARN REACT</h4>
          <li>
            <NavLink to='/learn/describing-the-ui'>Describing The UI</NavLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<QuickStart />}></Route>
          <Route path="/installation" element={<InstallationPage />}></Route>
          <Route path="/tic-tac-toe-tutorial" element={<TicTacToe />}></Route>
          <Route path="/describing-the-ui" element={<DescribingTheUI />}></Route>
          <Route path="*" element={<LessonErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Learn;
