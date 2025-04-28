import styles from "./Memories.module.css";

const Memories = () => {
  return (
    <div className={styles.memories}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1>Memories.</h1>
      </div>
    </div>
  );
};

export default Memories;
