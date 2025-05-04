import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex h-[75px] items-center p-5 justify-between md:px-25 w-full bg-indigo-700 text-indigo-50 border-0 border-b-1 border-b-indigo-300">
      <div className="text-[12px] w-1/4 sm:text-xl md:text-2xl font-bold">
        <h1>React Jobs</h1>
      </div>
      <div className="w/3-4 flex items-center justify-center gap-5 font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && "bg-slate-900 text-slate-50 p-2 rounded-sm"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive && "bg-slate-900 text-slate-50 p-2 rounded-sm"
          }
        >
          Jobs
        </NavLink>
      </div>
    </div>
  );
}
