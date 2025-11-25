import { AuthContext } from "./context/auth";
import { useState } from "react";

import "./custom.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import RequireUnAuth from "./auth/RequireUnAuth";

import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import Layout from "./layouts/Layout";

import HCFSAll from "./pages/Admin/hcfs/HCFS-All";
import HCFSEdit from "./pages/Admin/hcfs/HCFS-Edit";
import HCFSID from "./pages/Admin/hcfs/HCFS-ID";
import CreateHCFS from "./pages/Admin/hcfs/CreateHCFS";

import { loadLanguage, loadUser } from "./scripts/localStorage";
import { LanguageContext } from "./context/lang";

const JSC = () => {
  const [user, setUser] = useState(loadUser);
  const [lang, setLang] = useState(loadLanguage);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <HashRouter>
          <Routes>
            <Route path="/:language" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route element={<RequireAuth roles={["ADMIN"]} />}>
                <Route path="admin" element={<Admin />}>
                  <Route path="dashboard" element={<Dashboard />} />

                  <Route path="hcfs" element={<HCFSAll />} />
                  <Route path="hcfs/create" element={<CreateHCFS />} />
                  <Route path="hcfs/:id" element={<HCFSID />} />
                  <Route path="hcfs/:id/edit" element={<HCFSEdit />} />

                  <Route path="users" />
                  <Route path="users/:id" />
                  <Route path="users/:id/edit" />

                  <Route />
                </Route>
              </Route>
              <Route element={<RequireUnAuth />}>
                <Route path="login" element={<Login />} />
              </Route>
            </Route>
            <Route
              path="*"
              element={
                <h1 className="h-dvh flex w-full bg-slate-900 text-slate-300 font-mono font-bold text-3xl text-center items-center justify-center">
                  404 | Not Found
                </h1>
              }
            />
          </Routes>
        </HashRouter>
      </LanguageContext.Provider>
    </AuthContext.Provider>
  );
};

export default JSC;
