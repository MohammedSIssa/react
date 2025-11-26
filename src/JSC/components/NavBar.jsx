import { NavLink } from "react-router-dom";

import { removeUser } from "../scripts/localStorage";

import { useAuth } from "../hooks/useAuth";
import useLang from "../hooks/useLang";

import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";

export default function NavBar() {
  const { user, setUser } = useAuth();
  const { lang } = useLang();

  function logout() {
    setUser(null);
    removeUser();
  }
  return (
    <div className="flex items-center gap-2 text-slate-50 w-full p-4 bg-slate-700 border-b border-b-slate-600">
      <NavLink
        to={`/${lang}`}
        className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
      >
        {lang === "en" && <p className="hidden md:block font-bold">Homepage</p>}
        <GoHomeFill size={25} />
        {lang === "ar" && (
          <p className="hidden md:block font-bold">الصفحة الرئيسية</p>
        )}
      </NavLink>
      {user?.username && user?.role === "ADMIN" && (
        <NavLink
          to={`/${lang}/admin`}
          className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
        >
          {lang === "en" && (
            <p className="hidden md:block font-bold">Control Panel</p>
          )}
          <MdAdminPanelSettings size={25} />
          {lang === "ar" && (
            <p className="hidden md:block font-bold">لوحة التحكم</p>
          )}
        </NavLink>
      )}

      {user?.username && user?.role === "ADMIN" && (
        <NavLink
          to={`/${lang}/users`}
          className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
        >
          {lang === "en" && <p className="hidden md:block font-bold">Users</p>}
          <FaUsers size={25} />
          {lang === "ar" && (
            <p className="hidden md:block font-bold">المستخدمين</p>
          )}
        </NavLink>
      )}

      <NavLink
        to={`/${lang}/settings`}
        className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
      >
        {lang === "en" && <p className="hidden md:block font-bold">Settings</p>}
        <IoMdSettings size={25} />
        {lang === "ar" && (
          <p className="hidden md:block font-bold">الإعدادات</p>
        )}
      </NavLink>

      {!user?.username && (
        <NavLink
          to={`/${lang}/login`}
          className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100"
          dir="ltr"
        >
          {lang === "en" && <p className="hidden md:block font-bold">Log In</p>}
          <RiLoginBoxLine size={25} />
          {lang === "ar" && (
            <p className="hidden md:block font-bold">تسجيل الدخول</p>
          )}
        </NavLink>
      )}

      {user?.username && (
        <button
          className="flex gap-2 items-center justify-center md:bg-slate-600 md:p-2 md:px-4 md:rounded-lg md:hover:bg-slate-500 transition-all duration-100 hover:cursor-pointer"
          onClick={logout}
        >
          {lang === "en" && (
            <p className="hidden md:block font-bold">Log Out</p>
          )}
          <RiLogoutBoxLine size={25} />
          {lang === "ar" && (
            <p className="hidden md:block font-bold">تسجيل خروج</p>
          )}
        </button>
      )}
    </div>
  );
}
