import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

// import TodoApp from "./TodoApplication/TodoApp";
// import WelcomeBack from "./welcome-back/WelcomeBack";
// import TicTacToe from "./tic-tac-toe/TicTacToe";
import App from "./random-project/App";

import { OfflineNetApp } from "./server-front-end/OfflineNet";

// import FrontEnd from "./front-end-part/FrontEnd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OfflineNetApp />
  </StrictMode>,
);
