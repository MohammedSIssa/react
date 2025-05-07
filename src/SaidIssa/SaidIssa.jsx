import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TeachingCenter from "./pages/TeachingCenter";
import RedirectToZeroZero from "./helpers/redirectToFirstLesson";

import "./custom.css";

import { data } from './model/data'

export default function SaidIssa() {
  return (
    <BrowserRouter basename="/said-issa">
        <Routes>
          <Route path="/" index element={<HomePage />}></Route>
          <Route path="/lesson/*" element={<TeachingCenter data={data} />}></Route>
          <Route path='/lesson' end element={<RedirectToZeroZero />}></Route>
        </Routes>
    </BrowserRouter>
  );
}
