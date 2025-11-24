import useAuth from "../hooks/useAuth";

export default function Homepage() {
  const { user } = useAuth();
  return (
    <div>
      {user?.username ? (
        <h1>Welcome back, {user.username}</h1>
      ) : (
        <p>
          You are now seeing this as a guest, you can still see the market,
          however, you can not interact with the market
        </p>
      )}
    </div>
  );
}
