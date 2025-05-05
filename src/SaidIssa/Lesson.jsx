import { NavLink } from "react-router-dom";

const activeLinkClassName = "bg-zinc-200 text-zinc-900 font-extrabold";
const defaultLinkClassName =
  "p-2 px-5 w-full h-10 rounded-4xl flex items-center";

export default function Lesson({ id, title }) {
  return (
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
  );
}
