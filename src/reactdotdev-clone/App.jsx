import { PageContext } from "./PageContext";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Learn from "./pages/Learn";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

function ReactDotDevClone() {
  const [state, dispatch] = useReducer(reducer, { theme: "dark" });

  return (
    <BrowserRouter basename="/react-clone">
      <PageContext.Provider value={{ state, dispatch }}>
        <div className={"container" + " " + state.theme}>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/learn/*" element={<Learn />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </PageContext.Provider>
    </BrowserRouter>
  );
}

export default ReactDotDevClone;
