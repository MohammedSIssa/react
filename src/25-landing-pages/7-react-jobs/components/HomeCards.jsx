import { NavLink } from "react-router-dom";

export default function HomeCards() {
  return (
    <div className="flex flex-col gap-5 w-full px-5 py-8 lg:px-20 bg-indigo-50 items-center justify-center lg:flex-row">
      <div className="flex flex-col gap-5 w-full h-fit lg:w-1/2 bg-slate-300 rounded-xl text-slate-900 p-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          For Developers
        </h1>
        <p className="text-xs sm:text-lg md:text-xl">
          Browse our React jobs and start your career today
        </p>
        <NavLink
          to="/jobs"
          className="text-sm sm:text-md md:text-lg hover:bg-slate-800 lg:text-xl bg-slate-900 text-slate-100 w-fit px-5 py-2 font-bold rounded-lg"
        >
          {" "}
          Browser Jobs{" "}
        </NavLink>
      </div>
      <div className="flex flex-col gap-5 w-full h-fit lg:w-1/2 p-5 rounded-xl bg-indigo-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          For Employers
        </h1>
        <p className="text-xs sm:text-lg md:text-xl">
          List your job to find the perfect developer for the role
        </p>
        <NavLink
          to="/add-job"
          className="text-sm sm:text-md hover:bg-indigo-700 hover:text-indigo-50 md:text-lg lg:text-xl bg-indigo-600 text-indigo-100 w-fit px-5 py-2 font-bold rounded-lg"
        >
          {" "}
          Add Job{" "}
        </NavLink>
      </div>
    </div>
  );
}
