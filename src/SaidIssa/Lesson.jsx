import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const activeLinkClassName = "bg-zinc-200 text-zinc-900 font-bold rounded-4xl ";
const defaultLinkClassName =
  "p-2 px-5 w-full h-10 flex items-center rounded-4xl ";

const activeSubLinkClassName = "bg-zinc-700 font-bold ";

export default function Lesson({ id, title, chapters }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isLessonActive = location.pathname.startsWith(`/lesson/${id}`);
    setIsOpen(isLessonActive);
  }, [location.pathname, id]);

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? activeLinkClassName + defaultLinkClassName
            : defaultLinkClassName
        }
        to={`/lesson/${id}`}
      >
        {title}
      </NavLink>
      {isOpen && (
        <div className="bg-zinc-600 w-full p-2 px-10 rounded-4xl max-w-100">
          {chapters.map((chapter, idx) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? activeSubLinkClassName + defaultLinkClassName
                  : defaultLinkClassName
              }
              to={`/lesson/${id}/${idx}`}
              key={chapter.title}
            >
              {chapter.title}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
