function Card({ title, details }) {
  return (
    <div className="bg-zinc-800 text-zinc-100 rounded-3xl shadow-2xl px-8 py-5 pb-15 border-1 border-zinc-700 font-serif grow h-fit hover:border-zinc-600 hover:brightness-110 transition-all hover:cursor-pointer">
      <p className="text-xl md:text-2xl lg:text-4xl">{title}</p>
      <p className="text-sm md:text-lg text-zinc-400 mt-2">{details}</p>
    </div>
  );
}

export default Card;
