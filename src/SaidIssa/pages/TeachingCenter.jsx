import { Routes, Route } from "react-router-dom";
import LessonsNavBar from "../components/LessonsNavBar";
import GetFirstLesson from "../helpers/getFirstLesson";
import LessonContent from "./LessonContent";

export default function TeachingCenter({ data }) {
  return (
    <div className="teaching-center flex min-h-screen h-screen">
      <LessonsNavBar data={data} />
      <Routes>
        <Route path="/:id" element={<GetFirstLesson />}></Route>
        <Route
          path="/:id/:chapterId"
          element={<LessonContent data={data} />}
        ></Route>
      </Routes>
    </div>
  );
}
