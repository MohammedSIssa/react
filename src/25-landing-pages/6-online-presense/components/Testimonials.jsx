export default function Testimonials() {
  return (
    <div className="h-screen flex flex-col items-center gap-12 p-8 sm:p-10 md:p-15 lg:p-25 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold bg-cyan-200">
      <h1>Testimonials</h1>
      <div className="flex flex-col lg:flex-row w-full h-full p-5 sm:p-10 gap-5 md:p-15 lg:p-20 bg-cyan-950 rounded-4xl">
        <div className="w-full h-1/4 lg:h-full bg-cyan-100 lg:w-1/4 rounded-2xl"></div>
        <div className="w-full h-1/4 lg:h-full bg-cyan-100 lg:w-1/4 rounded-2xl"></div>
        <div className="w-full h-1/4 lg:h-full bg-cyan-100 lg:w-1/4 rounded-2xl"></div>
        <div className="w-full h-1/4 lg:h-full bg-cyan-100 lg:w-1/4 rounded-2xl"></div>
      </div>
    </div>
  ) 
}