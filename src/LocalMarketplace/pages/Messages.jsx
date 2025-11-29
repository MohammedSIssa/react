import useAuth from "../hooks/useAuth";

export default function Messages() {
  const { user } = useAuth();
return <h1 className="text-2xl">{user.username}'s messages</h1>;
}
