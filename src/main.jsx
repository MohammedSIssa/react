import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
// import ReactJobs from "./25-landing-pages/7-react-jobs/ReactJobs";
// import NavApp from "./responsive-apps/app-with-nav/NavApp";
// import SaidIssa from "./SaidIssa/SaidIssa";
// import UseCallbackExample1 from "./useCallback/example1";
// import TodoListApp from "./todolist/TodoListApp";
import MohSaid99 from "./mohsaid99/MohSaid99";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ReactJobs /> */}
    {/* <NavApp /> */}
    {/* <SaidIssa /> */}
    {/* <UseCallbackExample1 /> */}
    {/* <TodoListApp /> */}
    <MohSaid99 />
  </StrictMode>
);
