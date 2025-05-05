import styles from "./Services.module.css";
import productImage from '../assets/services-product.svg'

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.bg}></div>
      <div className={styles.bottom}></div>
      <div className={styles.content}>
        <div className={styles.box1}>
          <img src={productImage} alt="" />
        </div>
        <div className={styles.box2}>
          <h1>Our Services</h1>
          <p>
            Simplify your workflow with intuitive tools designed to save you
            time, keep you focused, and help you accomplish more—effortlessly.</p>
        </div>
      </div>
    </div>
  );
}
