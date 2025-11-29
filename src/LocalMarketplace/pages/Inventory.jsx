import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Inventory() {
  const { username } = useParams();
  const { user } = useAuth();
  return (
    <div>
      {username && <h1 className="text-2xl">{username}'s Inventory</h1>}
      {!username && <h1 className="text-2xl">{user?.username}'s Inventory</h1>}
    </div>
  );
}
