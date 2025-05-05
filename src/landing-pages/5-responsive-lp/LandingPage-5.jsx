import Hero from "./components/Hero";
import Services from "./components/Services";
import Reviews from "./components/Review";
import Subscribe from "./components/Subscribe";

import './style.css'

export default function LandingPage5() {
  return (
    <div className="app-container">
      <Hero />
      <Services />
      <Reviews />
      <Subscribe />
    </div>
  )
}