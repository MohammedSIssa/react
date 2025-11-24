import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Inventory() {
  const { username } = useParams();
  const { user } = useAuth();
  return (
    <div>
      {username && <h1>{username}'s Inventory</h1>}
      {!username && <h1>{user?.username}'s Inventory</h1>}
    </div>
  );
}
