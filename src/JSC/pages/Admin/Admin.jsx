import useLang from "../../hooks/useLang";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Admin = () => {
  const { lang } = useLang();
  return (
    <div className="h-full bg-slate-900 text-slate-200">
      {lang === "ar" && <p>لوحة التحكم</p>}
      {lang === "en" && <p>Control Panel</p>}

      <NavLink to="hcfs" className="font-bold">
        Open HCFS
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Admin;
