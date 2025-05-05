import styles from "./Services.module.css";
import { MoonStar, Bandage, Leaf } from "lucide-react";

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>We're here to help you feel better.</h1>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <Bandage size={48}  />
            <h1>Stress less.</h1>
            <p>
              Get in-the-moment relief for stress and anxiety so you can get
              back to living
            </p>
            <LearnMore />
          </div>
          <div className={styles.box}>
            <MoonStar size={48} />
            <h1>Sleep more.</h1>
            <p>Fall asleep (and stay asleep) naturally and peacefully</p>
            <LearnMore />
          </div>
          <div className={styles.box}>
            <Leaf size={48} />
            <h1>Live mindfully.</h1>
            <p>
              Navigate life's ups and downs with resilience, confidence and
              guided support.
            </p>
            <LearnMore />
          </div>
        </div>
      </div>
    </div>
  );
}

function LearnMore() {
  return <a href="#">Learn More</a>;
}
