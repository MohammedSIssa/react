import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="mt-15 p-5 py-8 h-dvh flex bg-slate-900 text-slate-200">
      {user ? <h1>Logged in as: {user?.username}</h1> : null}
    </div>
  );
};

export default Home;
