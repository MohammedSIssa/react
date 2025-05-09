import Lesson from "./Lesson";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

// import { LoginContext } from "../login/LoginContext";
// import { useContext } from "react";

import LoginButton from "../login/LoginButton";
import LessonNavBarButton from "./LessonNavBarButton";

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
        <div className="absolute bottom-2 right-2 w-full p-10">
          <LoginButton />
        </div>
      </div>
      <LessonNavBarButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
