import useAuth from "../hooks/useAuth";
import { saveUser } from "../scripts/localStorage";

import { API } from "../scripts/globals";
import { useState } from "react";

import LoginRegister from "../components/LoginRegister";

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logginIn, setLogginIn] = useState(false);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState("");

  async function login(e) {
    e.preventDefault();
    setLogginIn(true);
    if (username.trim() !== "" && password.trim() !== "") {
      const res = await fetch(API + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const user = await res.json();
        setUser(user);
        saveUser(user);
        setFeedback("Logged In Successfully");
      } else {
        setLogginIn(false);
        if (res.status === 400) {
          setFeedback("Incorrect username or password");
          setError("Incorrect username or password");
          throw new Error("Incorrect ئusername or password");
        }
        if (res.status === 500) {
          setFeedback("Server Error");
          setError("Internal Server Error");
          throw new Error("Internal Server Error");
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center text-violet-700">
      <form
        onSubmit={login}
        className={`rounded-xl shadow-2xl bg-gradient-to-b from-violet-200 to-violet-300 p-5 py-10 w-full max-w-[350px] flex flex-col gap-2 [&_input]:bg-violet-200 [&_input]:p-1 [&_input]:px-3 bg-violet-100 [&_input]:focus:outline-0 [&_input]:border-0 [&_input]:focus:border [&_input]:focus:border-violet-700 [&_input]:rounded ${
          error ? "border-red-600" : "border-violet-600"
        } ${logginIn ? "opacity-80" : ""}`}
      >
        <div className="flex items-center justify-center">
          <LoginRegister />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={username}
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            disabled={logginIn}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={logginIn}
          />
        </div>
        <p className={error ? "text-red-500" : "text-green-500"}>{feedback}</p>
        <button
          onClick={login}
          className="rounded bg-violet-700 text-violet-50 font-bold p-1 px-2 hover:brightness-110 transition-all duration-200 cursor-pointer"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
