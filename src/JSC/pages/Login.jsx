// import { API } from "../scripts/globals";
import { API } from "@/JSC/scripts/globals";
import { useState } from "react";
// import { useAuth } from "../hooks/useAuth";
import { useAuth } from "@/JSC/hooks/useAuth";

// import { saveUser } from "../scripts/localStorage";
import { saveUser } from "@/JSC/scripts/localStorage";

import useLang from "../hooks/useLang";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [flag, setFlag] = useState("");
  const { lang } = useLang();

  const { setUser } = useAuth();

  async function login(e) {
    e.preventDefault();
    try {
      const res = await fetch(API + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const user = await res.json();
        setUser(user);
        setFeedback("Logged in.");
        setFlag("valid");
        saveUser(user);
      } else {
        setFeedback("Invalid Credentials");
        setFlag("invalid");
      }
    } catch {
      setFeedback("Server error");
    }
  }

  return (
    <div className="flex items-center justify-center h-full p-10">
      <form
        dir={lang === "ar" ? "rtl" : "ltr"}
        onSubmit={login}
        className="flex flex-col gap-10 bg-slate-800 p-5 py-10 rounded-lg border border-slate-700 shadow-lg shadow-slate-800"
      >
        <div className="flex flex-col gap-2">
          {lang === "ar" && <label htmlFor="username">اسم المستخدم:</label>}
          {lang === "en" && <label htmlFor="username">Username:</label>}
          <input
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-slate-600 text-slate-50 focus:outline-0 border border-slate-700 p-1 px-2 focus:border-slate-500 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
            type="text"
            required
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2">
          {lang === "ar" && <label htmlFor="password">كلمة المرور:</label>}
          {lang === "en" && <label htmlFor="password">Password:</label>}
          <input
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="bg-slate-600 text-slate-50 focus:outline-0 border border-slate-700 p-1 px-2 focus:border-slate-500 rounded"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
            id="password"
            name="password"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="p-1 px-2 bg-slate-800 border border-slate-700 rounded hover:brightness-110 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-slate-800"
          >
            Log in
          </button>
          <p
            style={
              flag === "valid"
                ? { color: "lime" }
                : flag === "invalid"
                ? { color: "red" }
                : null
            }
          >
            {feedback}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
