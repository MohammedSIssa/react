import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import ChatQ4 from "./useRef/rdevChallenges/4.LatestState";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatQ4 />
  </StrictMode>
);
