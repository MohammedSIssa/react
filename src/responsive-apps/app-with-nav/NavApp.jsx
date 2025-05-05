import HomePage from "./layouts/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { PageContext } from "./PageContext";
import { useState } from 'react'

import "./custom.css";

export default function NavApp() {
  const [theme, setTheme] = useState("dark")
  return (
    <PageContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter basename="nav-app">
        <NavBar />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route to="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </PageContext.Provider>
  );
}
