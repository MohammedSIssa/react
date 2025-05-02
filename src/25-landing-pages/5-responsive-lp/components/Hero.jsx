import styles from "./Hero.module.css";

import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.heroContentTop}></div>
      <div className={styles.heroContent}>
        <h1>Calm your mind. Change your life.</h1>
        <p>The #1 app for sleep, meditation and relaxation</p>
        <div className={styles.heroButtons}>
          <button className={styles.primary}>Try for Free</button>
          <button>Already have an account?</button>
        </div>
      </div>
    </div>
  );
}
