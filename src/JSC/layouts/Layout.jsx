import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import useLang from "../hooks/useLang";
import { saveLanguage } from "../scripts/localStorage";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";

const Layout = () => {
  const { lang, setLang } = useLang();
  const { language } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);

    if (!["ar", "en"].includes(language)) {
      navigate(`/${lang}${location.pathname}`, { replace: true });
    } else {
      if (["ar", "en"].includes(language) && language !== lang) {
        setLang(language);
        saveLanguage(language);
      }
    }
  }, [lang, setLang, language, navigate, location.pathname]);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <NavBar />
      <div className="mt-15 p-5 py-8 h-dvh bg-slate-900 text-slate-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
