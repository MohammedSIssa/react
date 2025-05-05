import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
// import ReactJobs from "./25-landing-pages/7-react-jobs/ReactJobs";
import NavApp from "./responsive-apps/app-with-nav/NavApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ReactJobs /> */}
    <NavApp />
  </StrictMode>
);
