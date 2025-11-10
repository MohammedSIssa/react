import { useState } from "react";
import { API } from "../scripts/globals";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa6";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    try {
      if (username.trim() !== "" && password.trim() !== "") {
        setFeedback("Regestering..");
        const res = await fetch(API + "/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
          setFeedback("Registered successfully!");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else if (res.status === 400) {
          setFeedback("Username alreay exists");
          setUsername("");
          setPassword("");
        }
      } else {
        setFeedback("Missing info..");
      }
    } catch {
      setFeedback("Error while Registering..");
      setUsername("");
      setPassword("");
    }
  }

  return (
    <div className="flex flex-col h-dvh items-center py-10 relative">
      <span className="w-30 h-30 rounded-full mb-15 bg-neutral-800 flex items-center justify-center">
        <FaUser size={70} className="text-neutral-600" />
      </span>

      <p className="header text-neutral-500 text-4xl mb-5">Sign Up</p>
      <form
        onSubmit={register}
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
          onClick={register}
          type="submit"
          className="bg-black p-2 border border-black px-8 text-center mt-8 hover:cursor-pointer hover:brightness-110 hover:rounded-xl transition-all duration-150 hover:border hover:bg-neutral-900 hover:border-neutral-600"
        >
          Sign Up
        </button>
        {feedback}
      </form>

      {/* Not a memeber - create account section */}

      <div className="flex flex-col gap-2 items-center absolute bottom-3">
        <p className="text-neutral-500">Already a member?</p>
        <NavLink
          to={"/login"}
          className="p-1 px-3 rounded-full bg-neutral-800 text-neutral-500 border-2 border-neutral-500 hover:bg-neutral-500 hover:text-neutral-800 transition-all duration-200"
        >
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
