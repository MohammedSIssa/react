import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

// import TodoApp from "./TodoApplication/TodoApp";
// import WelcomeBack from "./welcome-back/WelcomeBack";
// import TicTacToe from "./tic-tac-toe/TicTacToe";

import { OfflineNetApp } from "./server-front-end/OfflineNet";
import { App } from "./mohsaid-neon/App";
// import ChartApp from "./chartjs/ChartApp";

import SocialMediaApp from "./social-media-app/SocialMediaApp";

// import FrontEnd from "./front-end-part/FrontEnd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SocialMediaApp />
  </StrictMode>,
);
