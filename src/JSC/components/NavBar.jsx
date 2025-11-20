import { NavLink } from "react-router-dom";

import { removeUser } from "../scripts/localStorage";
import { useAuth } from "../hooks/useAuth";

import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";

export default function NavBar() {
  const { user, setUser } = useAuth();

  function logout() {
    setUser(null);
    removeUser();
  }
  return (
    <div className="flex items-center gap-2 fixed top-0 left-0 text-slate-50 w-full p-4 bg-slate-700 border-b border-b-slate-600 shadow-lg shadow-slate-800">
      <NavLink
        to="/"
        className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
      >
        <GoHomeFill size={25} />
        <p className="hidden md:block font-bold">الصفحة الرئيسية</p>
      </NavLink>
      {!user?.username && (
        <NavLink
          to="/login"
          className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
          dir="ltr"
        >
          <RiLoginBoxLine size={25} />
          <p className="hidden md:block font-bold">تسجيل الدخول</p>
        </NavLink>
      )}
      {user?.username && user?.role === "ADMIN" && (
        <NavLink
          to="/admin"
          className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
        >
          <MdAdminPanelSettings size={25} />
          <p className="hidden md:block font-bold">صفحة الأدمن</p>
        </NavLink>
      )}

      {user?.username && (
        <button
          className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100 hover:cursor-pointer"
          onClick={logout}
        >
          <RiLogoutBoxLine />
          <p className="hidden md:block font-bold">تسجيل خروج</p>
        </button>
      )}
    </div>
  );
}
