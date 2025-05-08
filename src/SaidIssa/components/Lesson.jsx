import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const activeLinkClassName =
  "section py-8 px-5 text-xl w-full h-10 rounded-tr-xl rounded-tl-xl flex items-center border-0 border-emerald-600 border-b-2 flex flex-row items-center justify-between bg-emerald-100 text-emerald-900 font-bold mb-0 ";
const defaultLinkClassName =
  "section p-2 px-5 w-full h-10 flex items-center rounded-md flex flex-row items-center justify-between mb-2 ";

const activeSubLinkClassName =
  "p-2 px-10 w-full h-10 flex items-center rounded-xl bg-emerald-700 text-emerald-100 font-bold ";
const defaultSubLinkClassName =
  "p-2 px-10 w-full h-10 flex items-center text-emerald-900 rounded-4xl ";

export default function Lesson({ id, chapter, sections, classId }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isLessonActive = location.pathname.startsWith(
      `/${classId}/lesson/${id}`
    );
    setIsOpen(isLessonActive);
  }, [location.pathname, classId, id]);

  return (
    <>
      <NavLink
        className={() =>
          isOpen ? activeLinkClassName : defaultLinkClassName
        }
        to={`/${classId}/lesson/${id}/0`}
      >
        <p>{chapter}</p>
        <span>
          {isOpen && <MdKeyboardArrowDown size={24} />}
          {isOpen || <MdKeyboardArrowLeft size={24} />}
        </span>
      </NavLink>
      {isOpen && (
        <div className="bg-emerald-100 w-full p-2 max-w-100 rounded-bl-xl rounded-br-xl">
          {sections.map((section, idx) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeSubLinkClassName : defaultSubLinkClassName
              }
              to={`/${classId}/lesson/${id}/${idx}`}
              key={idx}
            >
              {section.sectionName}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
