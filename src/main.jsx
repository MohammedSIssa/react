import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Gift from "./Gift/Gift";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Gift />
  </StrictMode>
);
