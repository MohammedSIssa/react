import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Efficiency from "./components/EfficiencyInAction";
import Connecting from "./components/Connecting";
import Explore from "./components/Explore";
import KeyMetrics from "./components/KeyMetrics";
import ReadyToShip from "./components/ReadyToShip";

import styles from './LandingPage.module.css'

export default function LandingPage3() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <WhyChooseUs />
      <Efficiency />
      <Connecting />
      <Explore />
      <KeyMetrics />
      <ReadyToShip />
    </div>
  )
}