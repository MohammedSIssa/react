export default function Features() {
  return (
    <div className="bg-cyan-200 font-bold flex flex-col justify-start items-center h-screen p-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      <h1>Features</h1>
      <div className="flex flex-col gap-8 lg:flex-row p-5 md:p-15 lg:p-10 h-full w-full">
        <div className="rounded-2xl w-full lg:w-1/4 h-1/4 lg:h-full bg-cyan-900"></div>
        <div className="rounded-2xl w-full lg:w-1/4 h-1/4 lg:h-full bg-cyan-900"></div>
        <div className="rounded-2xl w-full lg:w-1/4 h-1/4 lg:h-full bg-cyan-900"></div>
        <div className="rounded-2xl w-full lg:w-1/4 h-1/4 lg:h-full bg-cyan-900"></div>
      </div>
    </div>
  )
}