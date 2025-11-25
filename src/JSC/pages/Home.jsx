import useLang from "../hooks/useLang";

const Home = () => {
  const { lang } = useLang();

  return (
    <div
      className="h-full bg-slate-900 text-slate-200"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {lang === "ar" ? <p>الصفحة الرئيسية</p> : <p>Homepage</p>}
    </div>
  );
};

export default Home;
