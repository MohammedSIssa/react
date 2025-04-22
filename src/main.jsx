import { StrictMode } from "react"
// import './index.css'
import { createRoot } from "react-dom/client";
// import LucideTest from "./lucide-icons/lucide-example";
// import App from './ShoppingSiteProject/App'
// import { BrowserRouter } from "react-router-dom";

// import Page from "./Context/PassingDataRDev/App";
// import ProfilePage from "./useContext/IntermediateRDev/App";

import ReducingState from "./useReducer/App";


import ReducerContext from "./ReducerAndContext/ReducerContext";

// import ChallengeApp from "./useContext/RDevChallenge/App";

// import ContextApp from "./Context/ContextApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter basename="/shopping-cart/">
      <App />
    </BrowserRouter> */}
    {/* <ContextApp /> */}
    {/* <Page /> */}
    {/* <ProfilePage /> */}
    {/* <ChallengeApp /> */}
    {/* <ReducingState /> */}
    <ReducerContext />
  </StrictMode>,
);
