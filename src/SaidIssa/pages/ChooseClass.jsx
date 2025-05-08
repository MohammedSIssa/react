import { NavLink } from "react-router-dom";

export default function ChooseClassPage() {
  return (
    <div className="flex flex-col gap-2 md:flex-row-reverse font-bold p-10 flex-wrap items-center w-full justify-center bg-emerald-900">
      <NavLink
        to="/5/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف الخامس
      </NavLink>
      <NavLink
        to="/6/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف السادس
      </NavLink>
      <NavLink
        to="/7/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف السابع
      </NavLink>
      <NavLink
        to="/8/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف الثامن
      </NavLink>
      <NavLink
        to="/9/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف التاسع
      </NavLink>
      <NavLink
        to="/10/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف العاشر
      </NavLink><NavLink
        to="/11/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف الحادي عشر
      </NavLink><NavLink
        to="/12/lesson/0/0"
        className="text-emerald-900 bg-emerald-50 p-5 px-10 rounded-3xl"
      >
        الصف التوجيهي
      </NavLink>
    </div>
  );
}
