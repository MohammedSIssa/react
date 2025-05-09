import LoginButton from "../login/LoginButton";

export default function Hero() {
  return (
    <div className="hero min-h-screen flex flex-col w-full p-7 py-25 md:p-10 md:py-30 bg-emerald-950 text-amber-100 border-0 border-b-1 border-emerald-700">
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
      <div className="navbar fixed top-0 left-0 p-5 w-full flex items-center justify-end bg-emerald-950 border-0 border-b-1 border-emerald-800">
        <LoginButton />
      </div>
    </div>
  );
}
