import styles from "./Connecting.module.css";
import cargo from '../assets/connect-cargo.png'

export default function Connecting() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          Connecting the World
          <br />
          <span className={styles.gold}>Through Reliable</span>, Efficient
          <br />
          Shipping Solutions.
        </p>
      </div>
      <div className={styles.image}>
        <img src={cargo} alt="" />
      </div>
    </div>
  );
}
