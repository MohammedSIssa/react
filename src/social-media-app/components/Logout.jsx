import useAuth from "../hooks/useAuth";
import { removeUser } from "../scripts/localStorage";

export default function Logout() {
  const { setUser } = useAuth();
  function logout() {
    setUser({});
    removeUser();
    location.reload();
  }

  return (
    <button className="text-red-300 hover:cursor-pointer" onClick={logout}>
      Logout
    </button>
  );
}
