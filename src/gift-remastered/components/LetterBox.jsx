export default function LetterBox({ text }) {
  return (
    <div className="w-full right-to-left p-5 text-lg text-right bg-rose-100 shadow-2xl text-rose-900 rubik font-bold mt-5 rounded-2xl border-2 z-50">
      {text}
    </div>
  );
}
