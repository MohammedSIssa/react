import useAuth from "../hooks/useAuth";
import LogoutButton from "../components/LogOutButton";
import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

export default function User() {
  const { username } = useParams();
  const { user } = useAuth();
  return (
    <div>
      <h1>{username}</h1>
      {user?.username == username && <LogoutButton />}
      <NavLink to={`/users/${username}/inventory`}>View Inventory</NavLink>
    </div>
  );
}
