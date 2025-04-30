import styles from "./HeroSection.module.css";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <NavBar />
      <div className={styles.backgroundImage}></div>
      <div className={styles.textContext}>
        <p>
          Global Shipping.
          <br />
          Done Right.
        </p>
      </div>
      <div className={styles.bottomText}>
        Reliable, fast, and const-effective solutions <br />
        for all <b>your cargo needs</b>
      </div>
      <div className={styles.actionButton}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 32 32"
          >
            <path
              fill="#111"
              d="M15.25 3a1.25 1.25 0 1 0 0 2.5h9.482L3.366 26.866a1.25 1.25 0 0 0 1.768 1.768L26.5 7.268v9.482a1.25 1.25 0 1 0 2.5 0V4.25C29 3.56 28.44 3 27.75 3z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
