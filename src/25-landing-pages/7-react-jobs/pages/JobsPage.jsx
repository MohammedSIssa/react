import Job from "../components/Job";

export default function JobsListing({ jobs, isHome=false }) {
  let data = [...jobs]
  if(isHome) data = jobs.slice(0,3)
  return (
    <>
      <h2 className="bg-indigo-100 text-center font-bold text-2xl lg:text-4xl pt-10">{isHome ? "Recent" : "Browse"} Jobs</h2>
      <div className="min-h-screen bg-indigo-100 w-full py-5 px-10 lg:px-0 md:py-10 md:px-0 lg:py-20 text-indigo-900 flex flex-col items-center justify-center md:items-start gap-5 md:flex-row flex-wrap">
        {data.map((job) => (
          <Job data={job} key={job.id} />
        ))}
      </div>
    </>
  );
}
