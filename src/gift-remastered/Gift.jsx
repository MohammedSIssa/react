import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./layouts/Home";
import Memories from "./pages/Memories";
import Letter from "./pages/Letter";
import SurpriseGift from "./pages/SurpriseGift";

import "./custom.css";

export default function GiftRemastered() {
  return (
    <BrowserRouter basename="/gift">
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/memories" element={<Memories />}></Route>
        <Route path="/letter" element={<Letter />}></Route>
        <Route path="/surprise-gift" element={<SurpriseGift />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
