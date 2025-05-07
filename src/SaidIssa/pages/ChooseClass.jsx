import { NavLink } from "react-router-dom";

export default function ChooseClassPage() {
  return (
    <div className="flex flex-col gap-2 md:flex-row p-10 flex-wrap">
      <NavLink
        to="/5/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف الخامس
      </NavLink>
      <NavLink
        to="/6/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف السادس
      </NavLink>
      <NavLink
        to="/7/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف السابع
      </NavLink>
      <NavLink
        to="/8/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف الثامن
      </NavLink>
      <NavLink
        to="/9/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف التاسع
      </NavLink>
      <NavLink
        to="/10/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف العاشر
      </NavLink><NavLink
        to="/11/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف الحادي عشر
      </NavLink><NavLink
        to="/12/lesson/"
        className="bg-zinc-900 text-zinc-50 p-5 px-10 rounded-3xl"
      >
        الصف التوجيهي
      </NavLink>
    </div>
  );
}
