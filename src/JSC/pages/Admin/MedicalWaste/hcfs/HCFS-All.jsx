import TableHead from "./TableHead";

import useLang from "../../../../hooks/useLang";
import { fake_hcfs } from "../../../../fakeData/mw-hcfs";

import { MdEditSquare } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import { NavLink } from "react-router-dom";

export default function HCFSAll() {
  function handleDelete(id) {
    // alert("DELETE HCFS ID:", id);
    console.log(id);
  }

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
              <td className="flex gap-2">
                <NavLink to={`${item.id}/edit`} className="text-blue-500">
                  <MdEditSquare size={20} />
                </NavLink>
                <NavLink to={`${item.id}`} className="text-yellow-500">
                  <MdPreview size={20} />
                </NavLink>
                <button
                  className="text-red-500"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  <MdDeleteForever size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
