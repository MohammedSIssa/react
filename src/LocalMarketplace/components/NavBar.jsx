// Shop Icon
import { FaCartShopping } from "react-icons/fa6";

// Inventory Icon
import { FaCartFlatbed } from "react-icons/fa6";

// Chat Icon
import { IoMdChatbubbles } from "react-icons/io";

// Home Icon
import { MdHome } from "react-icons/md";

// Profile Icon
import { BiUser } from "react-icons/bi";

// Search Icon
import { FaSearch } from "react-icons/fa";

// Login / Register Icon
import { FaDoorOpen } from "react-icons/fa6";


// Faves Icon
import { FaRegHeart } from "react-icons/fa6";

import { NavLink } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { user } = useAuth();
  return (
    <div className="nav-bar text-violet-50 [&_a]:w-full [&_a]:h-full [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a]:gap-2 flex items-center justify-between p-2 h-15 max-h-15 gap-2 fixed bottom-0 md:top-0 left-0 w-full border-t border-t-violet-900 md:border-t-0">
      <NavLink to={"/"}>
        <MdHome size={27} />
        {/* <span className="hidden lg:block">الرئيسية</span> */}
      </NavLink>
      <NavLink to="/market">
        <FaCartShopping size={24} />
        {/* <span className="hidden lg:block">السوق</span> */}
      </NavLink>
      {user?.username && (
        <NavLink to={`/inventory`}>
          <FaCartFlatbed size={24} />
          {/* <span className="hidden lg:block">المخزن</span> */}
        </NavLink>
      )}
      {user?.username && (
        <NavLink to="/likes">
          <FaRegHeart size={24} />
          {/* <span className="hidden lg:block">المحفوظ</span> */}
        </NavLink>
      )}
      {user?.username && (
        <NavLink to="/messages">
          <IoMdChatbubbles size={24} />
          {/* <span className="hidden lg:block">الرسائل</span> */}
        </NavLink>
      )}
      {user?.username && (
        <NavLink to={`/users/${user?.username}`}>
          <BiUser size={30} />
          {/* <span className="hidden lg:block">صفحتي</span> */}
        </NavLink>
      )}
      {user?.username && (
        <NavLink to={`/search`}>
          <FaSearch size={24} />
          {/* <span className="hidden lg:block">بحث</span> */}
        </NavLink>
      )}

      {!user?.username && (
        <NavLink to={`/users`}>
          <FaDoorOpen size={30} />
          {/* <span className="hidden lg:block">صفحتي</span> */}
        </NavLink>
      )}

      {
        //!user?.username && (
        // <NavLink to="/users/login">
        //   <CgLogIn size={24} />
        //   {/* <span className="hidden lg:block">تسجيل دخول</span> */}
        // </NavLink>
        //)
      }
    </div>
  );
}
