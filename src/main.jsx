import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import ReactDotDevClone from "./reactdotdev-clone/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactDotDevClone />
  </StrictMode>
);
