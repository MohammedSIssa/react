import { API } from "../scripts/globals";
import { useState, useEffect } from "react";

import LoginRegister from "../components/LoginRegister";

import { useNavigate } from "react-router-dom";

import { cities, areas } from "../scripts/cities";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [areaOptions, setAreaOptions] = useState(null);
  const [area, setArea] = useState("");
  const [feedback, setFeedback] = useState("");
  const [logginIn, setLogginIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setArea("");
    setAreaOptions(areas[city]);
  }, [city]);

  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    setLogginIn(true);
    if (
      username.trim() !== "" &&
      city.trim() !== "" &&
      area.trim() !== "" &&
      password.trim() !== ""
    ) {
      const res = await fetch(API + "/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          location: `${city} - ${area}`,
        }),
      });

      if (res.ok) {
        setFeedback("Registered Successfully!");
        setError(null);
        setTimeout(() => {
          navigate("/users/login");
        }, 1000);
      } else {
        setLogginIn(false);
        if (res.status === 400) {
          setError("Account with that username already exists");
          setFeedback("Account with that username already exists");
        }
        if (res.status === 500) {
          setError("Internal Server Error");
          throw new Error("Internal Server Error");
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center text-violet-700">
      <form
        onSubmit={register}
        className={`rounded-xl shadow-2xl bg-gradient-to-b from-violet-200 to-violet-300 p-5 py-10 w-full max-w-[350px] flex flex-col gap-2 [&_input]:bg-violet-200 [&_select]:bg-violet-200 [&_input]:p-1 [&_input]:px-3 [&_select]:p-1 [&_select]:px-3 bg-violet-100 [&_select]:focus:outline-0 [&_select]:border-0 [&_select]:focus:border [&_select]:focus:border-violet-700 [&_select]:rounded [&_input]:focus:outline-0 [&_input]:border-0 [&_input]:focus:border [&_input]:focus:border-violet-700 [&_input]:rounded ${
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
        <div className="flex flex-col gap-1">
          <label htmlFor="location">Living Area:</label>
          <select
            id="location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value={""}>-- اختر --</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {areaOptions && (
          <div className="flex flex-col gap-1">
            <label htmlFor="city">City Name:</label>
            <select
              id="city"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value={""}>-- اختر --</option>

              {areaOptions.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}
        <p className={error ? "text-red-500" : "text-green-500"}>{feedback}</p>
        <button
          onClick={register}
          className="rounded bg-violet-700 text-violet-50 font-bold p-1 px-2 hover:brightness-110 transition-all duration-200 cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}
