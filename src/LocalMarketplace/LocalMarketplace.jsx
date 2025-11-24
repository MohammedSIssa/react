import { HashRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "./auth/RequireAuth";
import RequireUnAuth from "./auth/RequireUnAuth";

import { AuthContext } from "./contexts/AuthContext";

import { useState } from "react";
import { loadUser } from "./scripts/localStorage";

import Homepage from "./pages/Homepage";
import Inventory from "./pages/Inventory";
import Market from "./pages/Market";
import User from "./pages/User";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import SearchPage from "./pages/Search";

import NavBar from "./components/NavBar";
import Messages from "./pages/Messages";

import "./custom.css";

const LocalMarketplace = () => {
  const [user, setUser] = useState(loadUser);
  return (
    <AuthContext value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <div className="pb-20 md:pb-0 md:pt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/market" element={<Market />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route element={<RequireAuth roles={["USER", "ADMIN"]} />}>
              <Route path="messages" element={<Messages />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="users/:username" element={<User />} />
              <Route path="users/:username/inventory" element={<Inventory />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
            <Route element={<RequireUnAuth />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>
    </AuthContext>
  );
};

export default LocalMarketplace;
