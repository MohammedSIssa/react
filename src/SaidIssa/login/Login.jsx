import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import { accounts } from "./accounts";

export default function Login() {
  const { setIsLoggedIn } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const navigate = useNavigate();

  function forLoopCheck(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === username && data[i].password) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/"); // Replace with your actual route
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  function handleLogIn(e) {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername && trimmedPassword) {
      const result = accounts.find(
        (account) =>
          account.username === trimmedUsername &&
          account.password === trimmedPassword
      );

      if (result) {
        setIsLoggedIn(true);
        setSuccess(true);
        setFail(false);
      } else {
        // some browsers do not support .find method
        const result = forLoopCheck(accounts);
        if (result) {
          setIsLoggedIn(true);
          setSuccess(true);
          setFail(false);
        } else {
          setIsLoggedIn(false);
          setSuccess(false);
          setFail(true);
        }
      }

      setUsername("");
      setPassword("");
    }
  }

  return (
    <>
      <form
        onSubmit={handleLogIn}
        className="bg-emerald-950 h-screen flex flex-col w-full items-center justify-center"
      >
        <div className="max-w-lg px-5 border-emerald-700 py-20 rounded-4xl border-2 flex flex-col gap-2 items-center justify-center">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-emerald-100 w-full py-5 lg:w-100 text-lg lg:text-2xl px-5 rounded-3xl font-bold text-right"
          placeholder="اسم المستخدم"
          autoComplete="off"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-emerald-100 w-full py-5 lg:w-100 text-lg lg:text-2xl px-5 rounded-3xl font-bold text-right"
          placeholder="كلمة السر"
          autoComplete="off"
        />
        <button
          className="bg-emerald-300 text-emerald-900 font-bold px-10 w-full py-5 lg:w-100 text-lg lg:text-2xl rounded-3xl hover:bg-emerald-500 hover:cursor-pointer"
          type="submit"
        >
          سجل الدخول
        </button>
        {success && (
          <p className="text-green-300 text-lg mt-4">
            ✅ تم تسجيل الدخول بنجاح
          </p>
        )}
        {fail && (
          <p className="text-red-400 text-lg mt-4">
            ❌ خطأ في اسم المستخدم أو كلمة المرور
          </p>
        )}
        </div>
      </form>
    </>
  );
}
