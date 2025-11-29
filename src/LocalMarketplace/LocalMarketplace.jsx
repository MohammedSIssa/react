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
import Likes from "./pages/Likes";

import NavBar from "./components/NavBar";
import Messages from "./pages/Messages";

import "./custom.css";
import Register from "./pages/Register";

const LocalMarketplace = () => {
  const [user, setUser] = useState(loadUser);
  return (
    <AuthContext value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <div className="p-5 md:p-0 md:pb-0 md:pt-20 text-violet-50 bg-gradient-to-t md:bg-gradient-to-b from-violet-950 to-violet-900 min-h-dvh">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/market" element={<Market />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            <Route element={<RequireUnAuth />}>
              <Route path="users/login" element={<Login />} />
              <Route path="users/register" element={<Register />} />
            </Route>

            <Route element={<RequireAuth roles={["USER", "ADMIN"]} />}>
              <Route path="messages" element={<Messages />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="likes" element={<Likes />} />
              <Route path="users" element={<User />} />
              <Route path="users/:username" element={<User />} />
              <Route path="users/:username/inventory" element={<Inventory />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>
    </AuthContext>
  );
};

export default LocalMarketplace;
