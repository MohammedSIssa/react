import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import ImageCarousel from "./useRef/DOM/rdevChallenges/ImageCarousel";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageCarousel />
  </StrictMode>
);
