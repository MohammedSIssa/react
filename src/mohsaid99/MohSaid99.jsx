import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./layouts/homepage";
import Welcome from "./components/Welcome";

import "./custom.css";

export default function MohSaid99() {
  return (
    <BrowserRouter basename="/mohsaid99">
        <Routes>
          <Route path="/" index element={<Welcome />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}
