import { NavBar } from "./components/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";

import { ErrorPage } from "./components/ErrorPage";
import { SuggestForm } from "./components/SuggestForm";

import { Content } from "./components/Content";
import { MoviesPage } from "./components/MoviesPage";
import { MoviePlayer } from "./components/MoviePlayer";
export const OfflineNetApp = () => {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoviePlayer />} />
          <Route path="/pdf" element={<Content />} />
          <Route path="/spotify" element={<Content />} />
          <Route path="/youtube" element={<Content />} />
          <Route path="/suggest" element={<SuggestForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};
