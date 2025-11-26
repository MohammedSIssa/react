import TableHead from "./TableHead";

import useLang from "../../../../hooks/useLang";
import { fake_hcfs } from "../../../../fakeData/mw-hcfs";

import { NavLink } from "react-router-dom";

export default function HCFSAll() {
  const { lang } = useLang();
  return (
    <div className="h-full">
      <div className="flex w-full justify-between items-center">
        <h1>
          {lang === "ar"
            ? "قائمة مراكز الرعاية الصحية (نفايات طبية)"
            : "List of Medical Centers (Medical Waste)"}
        </h1>
        <NavLink className="bg-slate-700 p-2 rounded font-bold" to="create">
          {lang === "ar" ? "اضافة مركز" : "New Center"}
        </NavLink>
      </div>
      <table className="mt-10">
        <TableHead />
        <tbody>
          {fake_hcfs[lang].map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.name_en}</td>
              <td>{item.name_ar}</td>
              <td>{item.municipal}</td>
              <td>{item.govenrate}</td>
              <td>{item.partnerType}</td>
              <td>{item.partner}</td>
              <td>{item.status}</td>
              <td>{item.served}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
