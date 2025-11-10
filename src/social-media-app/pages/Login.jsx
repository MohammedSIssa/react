import { useState } from "react";
import { API } from "../scripts/globals";
import { NavLink } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { saveUser } from "../scripts/localStorage";

import { FaUser } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rememberUser, setRememberUser] = useState(false);

  const navigate = useNavigate();

  const { setUser } = useAuth();

  async function login(e) {
    e.preventDefault();
    try {
      if (username.trim() !== "" && password.trim() !== "") {
        setFeedback("Logging in..");
        const res = await fetch(API + "/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const user = await res.json();

        if (res.ok) {
          setFeedback("Logged in successfully!");
          setUser(user);
          if (rememberUser) {
            saveUser(user);
          }
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } else {
        setFeedback("Missing info..");
      }
    } catch {
      setFeedback("Error while logging in..");
    }
  }

  return (
    <div className="flex flex-col h-dvh items-center py-10 relative">
      <span className="w-30 h-30 rounded-full mb-15 bg-neutral-800 flex items-center justify-center">
        <FaUser size={70} className="text-neutral-600" />
      </span>

      <p className="header text-neutral-500 text-4xl mb-5">Sign In</p>
      <form
        onSubmit={login}
        className="login-form flex flex-col gap-7 justify-start p-5 text-neutral-50"
      >
        <input
          placeholder="Username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="focus:outline-0 p-2 px-8 text-center text-neutral-50 bg-black placeholder:text-neutral-300 placeholder:text-center"
          dir="ltr"
          required
          autoComplete="off"
        />
        <input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="focus:outline-0 p-2 px-8 text-center text-neutral-50 bg-black placeholder:text-neutral-300 placeholder:text-center"
          dir="ltr"
          required
          autoComplete="off"
        />
        <button
          onClick={login}
          type="submit"
          className="bg-black p-2 border border-black px-8 text-center mt-8 hover:cursor-pointer hover:brightness-110 hover:rounded-xl transition-all duration-150 hover:border hover:bg-neutral-900 hover:border-neutral-600"
        >
          Sign In
        </button>
        <div className="flex gap-3">
          <input
            id="remember-user"
            name="remember-user"
            value={rememberUser}
            checked={rememberUser}
            onChange={(e) => setRememberUser(e.target.checked)}
            type="checkbox"
          />
          <label htmlFor="remember-user" className="text-neutral-300">
            Remember me
          </label>
        </div>
        <p>{feedback}</p>
      </form>

      {/* Not a memeber - create account section */}

      <div className="flex flex-col gap-2 items-center absolute bottom-3">
        <p className="text-neutral-500">Not a member?</p>
        <NavLink
          to={"/register"}
          className="p-1 px-3 rounded-full bg-neutral-800 text-neutral-500 border-2 border-neutral-500 hover:bg-neutral-500 hover:text-neutral-800 transition-all duration-200"
        >
          Create an account
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
