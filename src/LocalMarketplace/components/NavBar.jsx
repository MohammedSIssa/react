// Shop Icon
import { FaCartShopping } from "react-icons/fa6";

// Inventory Icon
import { MdInventory } from "react-icons/md";

// Chat Icon
import { IoMdChatbubbles } from "react-icons/io";

// Log In Icon
import { CgLogIn } from "react-icons/cg";

// import LogoutButton from "./LogOutButton";

// Home Icon
import { MdHome } from "react-icons/md";

// Profile Icon
import { FaUser } from "react-icons/fa";

// Search Icon
import { FaSearch } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { user } = useAuth();
  return (
    <div className="nav-bar text-violet-50 bg-violet-950 [&_a]:w-full [&_a]:hover:bg-violet-900 [&_a]:h-full [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a]:gap-2 flex items-center justify-between p-2 h-15 max-h-15 gap-2 fixed bottom-0 md:top-0 left-0 w-full">
      <NavLink to={"/"}>
        <MdHome size={24} />
        <span className="hidden lg:block">الرئيسية</span>
      </NavLink>
      <NavLink to="/market">
        <FaCartShopping size={24} />
        <span className="hidden lg:block">السوق</span>
      </NavLink>
      {user?.username && (
        <NavLink to={`/inventory`}>
          <MdInventory size={24} />
          <span className="hidden lg:block">المخزن</span>
        </NavLink>
      )}
      {user?.username && (
        <NavLink to="/messages">
          <IoMdChatbubbles size={24} />
          <span className="hidden lg:block">الرسائل</span>
        </NavLink>
      )}
      {user?.username && (
        <NavLink to={`/users/${user?.username}`}>
          <FaUser size={24} />
          <span className="hidden lg:block">صفحتي</span>
        </NavLink>
      )}
      {user?.username && (
        <NavLink to={`/search`}>
          <FaSearch size={24} />
          <span className="hidden lg:block">بحث</span>
        </NavLink>
      )}
      {!user?.username && (
        <NavLink to="/login">
          <CgLogIn size={24} />
          <span className="hidden lg:block">تسجيل دخول</span>
        </NavLink>
      )}
    </div>
  );
}
