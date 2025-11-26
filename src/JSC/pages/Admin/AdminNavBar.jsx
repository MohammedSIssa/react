import { NavLink } from "react-router-dom";

export default function AdminNavBar({ lang }) {
  return (
    <div className="flex gap-2 p-4 border-b border-b-slate-600 bg-slate-700 [&_a]:px-2 [&_a]:rounded [&_a]:font-bold [&_a]:cursor-pointer [&_a]:hover:bg-slate-900">
      <NavLink to="md">
        {lang === "ar" ? "فرع النفايات الطبية" : "Medical Waste"}
      </NavLink>

      <NavLink to="sw">
        {lang === "ar" ? "فرع النفايات الثانوية" : "Secondary Waste"}
      </NavLink>
      <NavLink to="finance">
        {lang === "ar" ? "فرع المالية" : "Finance"}
      </NavLink>
    </div>
  );
}
