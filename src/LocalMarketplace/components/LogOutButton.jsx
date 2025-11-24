import useAuth from "../hooks/useAuth";
import { removeUser } from "../scripts/localStorage";

// Log Out Icon
import { CgLogOut } from "react-icons/cg";

export default function LogoutButton() {
  const { setUser } = useAuth();

  function logout() {
    setUser(null);
    removeUser();
  }

  return (
    <button
      onClick={logout}
      className="bg-violet-500 p-2 text-violet-50 hover:cursor-pointer flex items-center justify-center gap-2"
    >
      <CgLogOut size={24} />
      <span>تسجيل الخروج</span>
    </button>
  );
}
