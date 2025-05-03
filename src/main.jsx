import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
// import Gift from "./Gift/Gift";
// import LandingPage1 from "./25-landing-pages/1-react-landing-page/LandingPage1";
// import LandingPage3 from "./25-landing-pages/3-shipping-site/LandingPage-3";
// import LandingPage4 from "./25-landing-pages/4-my-custom-design/LandingPage-4";
// import LandingPage5 from "./25-landing-pages/5-responsive-lp/LandingPage-5";
import LandingPage6 from "./25-landing-pages/6-online-presense/LandingPage6";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Gift /> */}
    {/* <LandingPage1 /> */}
    {/* <LandingPage5 /> */}
    <LandingPage6 />
  </StrictMode>
);
