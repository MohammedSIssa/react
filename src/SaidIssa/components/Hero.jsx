import { useContext } from "react";
import { LoginContext } from "../login/LoginContext";

export default function Hero() {
  const { isLoggedIn } = useContext(LoginContext)
  return (
    <div className="hero min-h-screen flex flex-col w-full p-7 py-20 md:p-10 md:py-20 bg-emerald-950 text-amber-100 border-0 border-b-2 border-emerald-400">
      <h1 className="font-bold text-2xl md:text-5xl xl:text-[110px]">
        مرحبًا بك في منصة الأستاذ سعيد عيسى لتعليم الفيزياء ⚡
      </h1>
      <p className="md:text-2xl mt-4 md:mt-13 pr-2 md:pr-3 font-thin">
       كل ما تحتاجه لفهم الفيزياء بسهولة، من الصف الخامس للثاني عشر، في مكان 
        واحد.
      </p>
      <p className="md:text-2xl mt-4 md:mt-7 pr-2 md:pr-3 font-thin">
       شرح مبسّط، محتوى متجدد، وأسلوب قريب من الطالب.
      </p>
      <h1 className="text-xl mt-10 md:text-2xl md:mt-15 xl:text-4xl font-bold">
        ابدأ رحلتك الآن وخلي الفيزياء تصير من المواد المفضلة عندك ✨
      </h1>
      {isLoggedIn ? "Logged In" : "Log In"}
    </div>
  );
}
