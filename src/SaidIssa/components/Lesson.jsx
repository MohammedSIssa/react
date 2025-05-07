import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const activeLinkClassName =
  "section py-8 px-5 text-xl w-full h-10 rounded-tr-xl rounded-tl-xl flex items-center border-0 border-zinc-500 border-b-2 flex flex-row items-center justify-between bg-zinc-300 text-zinc-900 font-bold mb-0 ";
const defaultLinkClassName =
  "section p-2 px-5 w-full h-10 flex items-center rounded-md flex flex-row items-center justify-between mb-2 ";

const activeSubLinkClassName =
  "p-2 px-10 w-full h-10 flex items-center rounded-xl bg-zinc-700 text-zinc-100 font-bold ";
const defaultSubLinkClassName =
  "p-2 px-10 w-full h-10 flex items-center text-zinc-900 rounded-4xl ";

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
          isActive ? activeLinkClassName  : defaultLinkClassName
        }
        to={`/lesson/${id}`}
      >
        <p>{title}</p>
        <span>
          {isOpen && <MdKeyboardArrowDown size={24} />}
          {isOpen || <MdKeyboardArrowLeft size={24} />}
        </span>
      </NavLink>
      {isOpen && (
        <div className="bg-zinc-300 w-full p-2 max-w-100 rounded-bl-xl rounded-br-xl">
          {chapters.map((chapter, idx) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeSubLinkClassName : defaultSubLinkClassName
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
