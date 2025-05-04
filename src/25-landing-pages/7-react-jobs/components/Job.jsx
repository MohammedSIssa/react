

export default function Job({data}) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 max-h-100 h-100 bg-slate-300 text-slate-900 p-2 md:p-5 rounded-xl shadow-black-100 shadow-lg border-1 border-slate-300">
      <p className="text-lg sm:text-xl md:text-2xl font-bold">{data.title}</p>
    </div>
  )
}