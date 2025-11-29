import useAuth from "../hooks/useAuth";

export default function Homepage() {
  const { user } = useAuth();
  return (
    <div>
      {user?.username ? (
        <h1 className="text-2xl">Welcome back, {user.username}</h1>
      ) : (
        <div>
          <h1 className="text-2xl">Home</h1>
          <p>
            You are now seeing this as a guest, you can still see the market,
            however, you can not interact with products, set a buy order, or add a
            new item to the market
          </p>
        </div>
      )}
    </div>
  );
}
