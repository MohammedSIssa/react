import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Chat from "./useRef/rdevChallenges/1.BrokenChat";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Chat />
  </StrictMode>
);
