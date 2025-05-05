import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Job({ data }) {
  const [showMore, setShowMore] = useState(false);

  let desc = showMore ? data.description : data.description.slice(0, 100);

  return (
    <div className="w-full md:w-1/3 relative lg:w-1/4 max-h-110 h-110 bg-slate-300 text-slate-900 p-2 md:p-5 rounded-xl shadow-black-100 shadow-lg border-1 border-slate-400">
      <p className="text-xl sm:text-2xl font-extrabold">{data.title}</p>
      <p className="mt-5 px-1 font-light">
        {desc}
        {showMore || "..."}
      </p>
      <button
        className="text-slate-700 underline cursor-pointer mt-2 hover:text-slate-900"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Less" : "More"}
      </button>
      <button className="bg-indigo-500 cursor-pointer absolute bottom-5 right-5 text-indigo-50 font-bold p-2 px-5 rounded-lg hover:bg-indigo-600 shadow-lg shadow-indigo-700">
        Apply
      </button>
      <div className="absolute bottom-5 left-5 flex items-center gap-1">
        <FaLocationDot color="#ff032a" size={18} />
        <p className="text-red-800">{data.location}</p>
      </div>
    </div>
  );
}
