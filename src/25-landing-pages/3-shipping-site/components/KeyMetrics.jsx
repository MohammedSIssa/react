import styles from "./KeyMetrics.module.css";

export default function KeyMetrics() {
  return (
    <div className={styles.container}>
      <div className={styles.headerPoint}>
        <p>Key Metrics</p>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box1}>
          <div className={styles.box1__box1}>
            <h1>Define Our Excellence</h1>
            <p>
              We believe financial growth begins with trust.
              <br />
              That's why we prioritize world-class
            </p>
          </div>
          <div className={styles.box1__box2}>
            <h1>99%</h1>
            <p>Shipments arrive on time</p>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.box2__box1}>
            <h1>1.5 million</h1>
            <p>
              handled annually, connecting <br />
              businesses worldwide
            </p>
          </div>
          <div className={styles.box2__box2}>
            <h1>100+</h1>
            <p>
              Serving 100+ countries, providing global
              <br />
              coverage for all your shipping needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
