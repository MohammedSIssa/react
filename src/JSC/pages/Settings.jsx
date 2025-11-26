import useLang from "../hooks/useLang";
import { saveLanguage } from "../scripts/localStorage";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { lang, setLang } = useLang();
  const [language, setLanguage] = useState(lang);
  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    setLang(language);
    saveLanguage(language);
    navigate(`/${language}`);
  }

  function handleChange(e) {
    setLanguage(e.target.value);
  }

  return (
    <div className="flex items-center justify-center h-full p-4">
      <form
        className="flex flex-col gap-2"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {language === "ar" && <label htmlFor="language">اللغة:</label>}
        {language === "en" && <label htmlFor="language">Language:</label>}
        <select
          id="language"
          value={language}
          onChange={handleChange}
          className="bg-slate-700 text-slate-50 px-5 focus:outline-0 p-2 rounded"
        >
          <option value={"ar"}>عربي</option>
          <option value={"en"}>English</option>
        </select>

        <button
          onClick={handleSave}
          className="bg-cyan-700 rounded p-2 px-5 hover:brightness-110 hover:cursor-pointer transition-all duration-200"
        >
          {language === "ar" && "حفظ"}
          {language === "en" && "Save"}
        </button>
      </form>
    </div>
  );
}
