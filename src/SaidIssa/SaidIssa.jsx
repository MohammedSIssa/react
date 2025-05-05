import { Routes, Route, BrowserRouter } from "react-router-dom";
import LessonContent from "./pages/LessonContent";
import Lessons from "./Lessons";

import "./custom.css";

const fakeData = [
  {
    title: "Mechanical Physics",
    videoID: "7JoUUcvaSI",
    lessons: ["chapter 1", "chapter 2"],
  },
  {
    title: "Static Electricity",
  },
  {
    title: "Electro-magnetics",
  },
];

export default function SaidIssa() {
  return (
    <BrowserRouter basename="/said-issa">
      <div className="flex min-h-screen h-screen">
        <Lessons data={fakeData} />
        <Routes>
          <Route
            path="/lesson/:id"
            element={<LessonContent data={fakeData} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
