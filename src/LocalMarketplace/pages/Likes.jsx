import useAuth from "../hooks/useAuth";

export default function Likes() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-2xl">{user.username}'s Likes</h1>
    </div>
  );
}
