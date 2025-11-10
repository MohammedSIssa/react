import useAuth from "../hooks/useAuth";
import Logout from "../components/Logout";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="p-10 text-neutral-200">
      <h1 className="text-2xl">Welcome back, {user.username}</h1>
      <Logout />
    </div>
  );
};

export default Home;
