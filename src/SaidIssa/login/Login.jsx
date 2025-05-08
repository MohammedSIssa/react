import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import { accounts } from "./accounts";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(isLoggedIn)

  function handleLogIn(e) {
    e.preventDefault();
    if (
      username &&
      password &&
      username.trim().length > 0 &&
      username.trim().length > 0
    ) {
      const result = accounts.find(
        (account) =>
          account.username === +username && account.password === +password
      );
      if (result) {
        setIsLoggedIn(true);
        navigate("/");
      }
    }
  }
  return (
    <>
      {!isLoggedIn && (
        <form
          onSubmit={handleLogIn}
          className="bg-emerald-950 h-screen flex flex-col w-full items-center justify-center gap-5"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-emerald-100 w-50"
            placeholder="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-emerald-100 w-50"
            placeholder="password"
          />
          <button type="submit">Log In</button>
        </form>
      )}
    </>
  );
}
