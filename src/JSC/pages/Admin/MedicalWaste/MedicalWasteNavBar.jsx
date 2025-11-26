import { NavLink } from "react-router-dom";
import useLang from "../../../hooks/useLang";

export default function MedicalWasteNavBar() {
  const { lang } = useLang();

  return (
    <div className="flex p-4 bg-slate-700 border-b border-b-slate-600 [&_a]:px-2 [&_a]:rounded [&_a]:font-bold [&_a]:cursor-pointer [&_a]:hover:bg-slate-900">
      <NavLink to="hcfs" className="font-bold bg-slate-700 px-2 rounded">
        {lang === "en" ? "HCFS" : "المراكز الصحية"}
      </NavLink>
    </div>
  );
}
