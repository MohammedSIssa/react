import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import InstallationPage from "./learn/InstallationPage";
import TicTacToe from "./learn/TicTacToe";

import './Learn.css'
import QuickStart from "./learn/QuickStart";

function Learn() {
  return (
    <div className="learn-page">
      <nav className="learning-nav">
        <ul>
          <li>
            <NavLink to="/learn/installation">Installation</NavLink>
          </li>
          <li>
            <NavLink to='/learn/tic-tac-toe-tutorial'>Tic Tac Toe</NavLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<QuickStart />}></Route>
          <Route path="/installation" element={<InstallationPage />}></Route>
          <Route path="/tic-tac-toe-tutorial" element={<TicTacToe />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Learn;
