import { AuthContext } from "./context/auth";
import { useState } from "react";

import "./custom.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import RequireUnAuth from "./auth/RequireUnAuth";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

import { loadUser } from "./scripts/localStorage";

const JSC = () => {
  const [user, setUser] = useState(loadUser);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth roles={["ADMIN"]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route element={<RequireUnAuth />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthContext.Provider>
  );
};

export default JSC;
