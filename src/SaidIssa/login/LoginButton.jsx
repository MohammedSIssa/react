import { useContext } from "react";
import { LoginContext } from "../login/LoginContext";

import { NavLink } from "react-router-dom";

import { FaCircleCheck } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";

export default function LoginButton() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <>
      {isLoggedIn ? (
        <div className="flex gap-1 md:gap-4 items-center justify-center">
          <p>
            تم تسجيل الدخول
          </p>
          <FaCircleCheck size={24} />
        </div>
      ) : (
        <NavLink to="/login" className="flex items-center justify-center gap-5 hover:bg-emerald-800 p-2 rounded-lg">
          <p>سجل الدخول</p>
          <IoLogInOutline size={24} />
        </NavLink>
      )}
    </>
  );
}
