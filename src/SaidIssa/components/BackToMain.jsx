import { NavLink } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";


export default function BackToMain() {
  return (
    <NavLink to='/' className="flex gap-2 items-center hover:bg-emerald-800 p-2 rounded-lg">
      الصفحة الرئيسية
      <RiHome2Fill size={20} />
    </NavLink>
  )
}