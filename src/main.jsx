import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
// import ReactJobs from "./25-landing-pages/7-react-jobs/ReactJobs";
// import NavApp from "./responsive-apps/app-with-nav/NavApp";
import GiftRemastered from "./gift-remastered/Gift";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ReactJobs /> */}
    {/* <NavApp /> */}
    <GiftRemastered />
  </StrictMode>
);
