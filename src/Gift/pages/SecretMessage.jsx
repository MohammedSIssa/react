import styles from "./SecretMessage.module.css";

const SecretMessage = () => {
  return (
    <div className={styles["secret-message"]}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1>Love Letter</h1>
      </div>
    </div>
  );
};

export default SecretMessage;
