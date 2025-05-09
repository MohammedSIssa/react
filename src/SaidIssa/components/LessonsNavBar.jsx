import Lesson from "./Lesson";
import { useState } from "react";

// import { LoginContext } from "../login/LoginContext";
// import { useContext } from "react";

import LoginButton from "../login/LoginButton";
import LessonNavBarButton from "./LessonNavBarButton";
import BackToMain from "./BackToMain";

export default function LessonsNavBar({ data, classId, classTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={
          (isOpen ? "" : "hidden ") +
          "h-full flex p-5 flex-col lg:flex lg:flex-col w-screen min-w-screen lg:w-80 lg:min-w-80 lg:max-w-80 bg-emerald-900 text-emerald-100 relative"
        }
      >
        <h1 className="text-3xl font-bold mb-5">{classTitle}</h1>
        {data.map((dataItem, id) => (
          <Lesson
            key={id}
            id={id}
            chapter={dataItem.chapter}
            sections={dataItem.sections}
            classId={classId}
          />
        ))}
        <div className="absolute bottom-0 right-0 w-full p-10 flex flex-col items-center justify-center gap-5 border-0 border-t-1 border-emerald-700">
          <BackToMain />
          <LoginButton />
        </div>
      </div>
      <LessonNavBarButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
