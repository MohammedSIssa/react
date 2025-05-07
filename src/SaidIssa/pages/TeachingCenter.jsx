import { Routes, Route } from "react-router-dom";
import LessonsNavBar from "../components/LessonsNavBar";
import LessonContent from "./LessonContent";
import { useParams } from "react-router-dom";

export default function TeachingCenter({ data }) {
  const { classId } = useParams();
  const actualData = data[classId];
  return (
    <div className="teaching-center flex min-h-screen h-screen">
      <LessonsNavBar
        data={actualData.data}
        classTitle={actualData.title}
        classId={classId}
      />
      <Routes>
        <Route
          path="/:id/:chapterId"
          element={<LessonContent data={actualData.data} />}
        ></Route>
      </Routes>
    </div>
  );
}
