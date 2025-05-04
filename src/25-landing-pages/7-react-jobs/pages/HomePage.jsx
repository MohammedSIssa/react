import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsListing from "./JobsPage";
import { jobs } from '../data/jobs'

export default function HomePage() {
  return (
    <div className="roboto">
      <Hero />
      <HomeCards />
      <JobsListing isHome={true} jobs={jobs} />
    </div>
  )
}