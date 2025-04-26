import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import VideoPlayer from "./useRef/DOM/rdevChallenges/VideoPlayer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoPlayer />
  </StrictMode>
);
