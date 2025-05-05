import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

import './style.css'

export default function LandingPage4() {
  return (
    <div className="container">
      <Hero />
      <Services />
      <Contact />
    </div>
  )
}