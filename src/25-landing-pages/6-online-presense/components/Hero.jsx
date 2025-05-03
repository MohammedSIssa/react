export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center lg:flex-row lg:justify-around lg:items-center">
      <div className="h-1/3 md:w-full md:h-full lg:w-3/5 text-3xl text-center lg:text-6xl text-cyan-200 flex justify-center items-center bg-cyan-900 lg:h-dvh">
        <h1 className="max-w-2/3 lg:max-w-full font-bold md:text-4xl lg:text-5xl">
          Your Awesome Landing Page
        </h1>
      </div>
      <div className="h-2/3 lg:w-2/5 md:h-1/2 md:w-full lg:h-dvh text-2xl text-cyan-950 bg-cyan-200 flex justify-center items-center">
        <div className="px-10 py-8 font-bold md:px-20 md:py-12 lg:px-40 lg:py-15 rounded-3xl bg-cyan-400 lg:text-3xl">
          Product Image
        </div>
      </div>
    </div>
  );
}
