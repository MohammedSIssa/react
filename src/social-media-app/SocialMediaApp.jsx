import { HashRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import { loadUser } from "./scripts/localStorage";

import RequireAuth from "./auth/RequireAuth";
import RequireUnAuth from "./auth/RequireUnAuth";

import Home from "./pages/Home";

import "./custom.css";

import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./pages/UserPage";
import FollowersPage from "./pages/FollowersPage";
import FollowingPage from "./pages/FollowingPage";

const SocialMediaApp = () => {
  const [user, setUser] = useState(loadUser);
  return (
    <AuthContext value={{ user, setUser }}>
      <HashRouter>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/users/:id/followers" element={<FollowersPage />} />
            <Route path="/users/:id/following" element={<FollowingPage />} />
          </Route>
          <Route element={<RequireUnAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthContext>
  );
};

export default SocialMediaApp;
