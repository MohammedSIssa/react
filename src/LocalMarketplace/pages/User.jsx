import useAuth from "../hooks/useAuth";
import LogoutButton from "../components/LogOutButton";
import { useParams } from "react-router-dom";

export default function User() {
  const { username } = useParams();
  const { user } = useAuth();
  return (
    <div>
      {user?.username == username && (
        <h1>
          This is your page <LogoutButton />
        </h1>
      )}
      {!(user?.username == username) && (
        <h1>This is not your page, this is {username}'s page.</h1>
      )}
    </div>
  );
}
