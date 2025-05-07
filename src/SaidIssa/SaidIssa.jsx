import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TeachingCenter from "./pages/TeachingCenter";
import RedirectToZeroZero from "./helpers/redirectToFirstLesson";

import GetFirstLesson from "./helpers/getFirstLesson";

import "./custom.css";

// import { data } from './model/data'

import { dataHashMap } from "./model/data";

export default function SaidIssa() {
  return (
    <BrowserRouter basename="/said-issa">
        <Routes>
          <Route path="/" index element={<HomePage />}></Route>
          <Route path="/:classId/lesson/*" element={<TeachingCenter data={dataHashMap} />}></Route>
          <Route path="/:classId/lesson/:id" element={<GetFirstLesson />}></Route>
          <Route path='/:classId/lesson' element={<RedirectToZeroZero />}></Route>
          {/* <Route path="/lesson/*" element={<TeachingCenter data={data} />}></Route> */}
          {/* <Route path='/lesson' end element={<RedirectToZeroZero />}></Route> */}
        </Routes>
    </BrowserRouter>
  );
}
