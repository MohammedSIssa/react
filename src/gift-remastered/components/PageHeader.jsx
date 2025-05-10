import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function PageHeader({ text }) {
  return (
    <div className="flex items-center pb-5 gap-5 w-full border-0 z-50 border-rose-900 border-b-2">
      <NavLink
        to="/"
        className="z-50 flex items-center justify-center text-rose-900"
      >
        <IoIosArrowBack size={40} />
      </NavLink>
      <h1 className="z-50 text-3xl text-rose-800 din">{text}</h1>
    </div>
  );
}
