import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import TeachingCenter from "./pages/TeachingCenter";
import RedirectToZeroZero from "./helpers/redirectToFirstLesson";
import GetFirstLesson from "./helpers/getFirstLesson";
import { LoginContext } from "./login/LoginContext";
import Login from "./login/Login";

import "./custom.css";
import { dataHashMap } from "./model/data";

export default function SaidIssa() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === true;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter basename="/said-issa">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" index element={<HomePage />}></Route>
          <Route
            path="/:classId/lesson/*"
            element={<TeachingCenter data={dataHashMap} />}
          ></Route>
          <Route
            path="/:classId/lesson/:id"
            element={<GetFirstLesson />}
          ></Route>
          <Route
            path="/:classId/lesson"
            element={<RedirectToZeroZero />}
          ></Route>
          {/* <Route path="/lesson/*" element={<TeachingCenter data={data} />}></Route> */}
          {/* <Route path='/lesson' end element={<RedirectToZeroZero />}></Route> */}
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}
