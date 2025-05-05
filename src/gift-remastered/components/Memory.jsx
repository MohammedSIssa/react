export default function Memory({ data }) {
  return (
    <div className="memory-box rubik h-fit pb-15 bg-gradient-to-b from-rose-100 to-rose-200 rounded-4xl z-50 shadow-xl p-5 text-rose-800 border-2">
      <h1 className="text-2xl din">
        {data.date} <span className="text-lg rubik">({data.time})</span>
      </h1>
      <p className="text-md text-rose-950">{data.title}</p>
      <p className="text-lg font-bold w-7/8">{data.story}</p>
    </div>
  );
}
