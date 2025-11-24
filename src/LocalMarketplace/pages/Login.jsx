import useAuth from "../hooks/useAuth";
import { saveUser } from "../scripts/localStorage";

export default function Login() {
  const { setUser } = useAuth();
  function login() {
    // for now just no back end
    const fakeUser = {
      username: "mohsaid99",
      role: "ADMIN",
    };

    saveUser(fakeUser);
    setUser(fakeUser);
  }
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}
