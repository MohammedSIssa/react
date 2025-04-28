import styles from "./SpecialGift.module.css";

export default function SpecialGift() {
  return (
    <div className={styles["special-gift"]}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1>Your Gift Here.</h1>
      </div>
    </div>
  );
}
