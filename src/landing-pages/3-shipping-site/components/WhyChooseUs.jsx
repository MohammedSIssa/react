import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <div className={styles.whyChooseUs}>
      <div className={styles.boxLeft}>
        <p className={styles.headerPoint}>Why Choose Us</p>
      </div>
      <div className={styles.boxRight}>
        <div className={styles.images}>
          <div className={styles.image1}></div>
          <div className={styles.image2}></div>
        </div>
        <div className={styles.text}>
          <p>
            We deliver more than cargo. We deliver trust,{" "}
            <span className={styles.grey}>
              peace of mind, and exceptional value
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
