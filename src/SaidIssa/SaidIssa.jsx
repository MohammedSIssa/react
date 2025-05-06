import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LessonContent from "./pages/LessonContent";
import Lessons from "./Lessons";
import GetFirstLesson from "./getFirstLesson";

import "./custom.css";

const fakeData = [
  {
    title: "Chapter 1",
    chapters: [
      {
        title: "Section 1",
        lesson: "Chapter 1 > Section 1 Lesson Content",
      },
      {
        title: "Section 2",
        lesson: "Chapter 1 > Section 2 Lesson Content",
      },
      {
        title: "Section 3",
        lesson: "Chapter 1 > Section 3 Lesson Content",
      },
      {
        title: "Section 4",
        lesson: "Chapter 1 > Section 4 Lesson Content",
      },
      {
        title: "Exercises",
        lesson: "Chapter 1 > Exerices"
      },
      {
        title: "Review",
        lesson: "Chapter 1 > Review"
      }
    ],
  },
  {
    title: "Chapter 2",
    chapters: [
      {
        title: "Section 1",
        lesson: "Chapter 2 > Section 1 Lesson Content",
      },
      {
        title: "Section 2",
        lesson: "Chapter 2 > Section 2 Lesson Content",
      },
      {
        title: "Section 3",
        lesson: "Chapter 2 > Section 3 Lesson Content",
      },
      {
        title: "Exercises",
        lesson: "Chapter 2 > Exerices"
      },
      {
        title: "Review",
        lesson: "Chapter 2 > Review"
      }
    ],
  },
  {
    title: "Chapter 3",
    chapters: [
      {
        title: "Section 1",
        lesson: "Chapter 3 > Section 1 Lesson Content",
      },
      {
        title: "Section 2",
        lesson: "Chapter 3 > Section 2 Lesson Content",
      },
      {
        title: "Section 3",
        lesson: "Chapter 3 > Section 3 Lesson Content",
      },
      {
        title: "Section 4",
        lesson: "Chapter 3 > Section 4 Lesson Content",
      },
      {
        title: "Exercises",
        lesson: "Chapter 3 > Exerices"
      },
      {
        title: "Review",
        lesson: "Chapter 3 > Review"
      }
    ],
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
            element={<GetFirstLesson />}
          ></Route>
          <Route
            path="/lesson/:id/:chapterId"
            element={<LessonContent data={fakeData} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
