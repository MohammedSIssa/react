import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-20">
      <FaExclamationTriangle color="#ecd057" size={100} />
      <h1 className="font-bold text-2xl md:text-4xl">
        This Page Does Not Exist
      </h1>
      <NavLink
        to="/"
        className="bg-indigo-600 text-indigo-50 px-5 py-2 font-bold rounded-xl hover:bg-indigo-700"
      >
        Return
      </NavLink>
    </div>
  );
}
