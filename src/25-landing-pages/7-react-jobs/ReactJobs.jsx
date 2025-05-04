import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import JobsListing from "./pages/JobsPage";
import ErrorPage from "./pages/ErrorPage";

import { jobs } from './data/jobs'

import './custom.css'

export default function ReactJobs() {
  return (
    <BrowserRouter basename="/landing-page-5/">
      <NavBar />     
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/jobs' element={<JobsListing jobs={jobs} />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
