import { NavLink } from "react-router-dom";

import { HiShoppingBag } from "react-icons/hi2";

export default function LoginRegister() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <HiShoppingBag size={40} />
      <hr className="border-violet-400 border w-full" />
      <div className="login-register flex gap-2 bg-violet-100 [&_a]:p-2 border-2 rounded-xl border-violet-700">
        <NavLink to="/users/login">Login</NavLink>
        <NavLink to="/users/register">Register</NavLink>
      </div>
    </div>
  );
}
