import useLang from "../../hooks/useLang";
import { Outlet } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

const Admin = () => {
  const { lang } = useLang();
  return (
    <div>
      <AdminNavBar lang={lang} />
      <Outlet context={{ lang }} />
    </div>
  );
};

export default Admin;
