import styles from './Subscribe.module.css'

export default function Subscribe() {
  return (
    <div className={styles.container}>
      <h1>Start your Premium free trial.</h1>
      <div className={styles.yearly}>
        <div className={styles.free}>
          <h4>14-Day Free Trial</h4>
        </div>
        <div className={styles.box_left}>
          <h4>Yearly</h4>
          <p>US$69.69/yr</p>
        </div>
        <div className={styles.box_right}>
          <h4>US$5.83/mo.</h4>
        </div>
      </div>
      <p className={styles.cancel}>Cancel anytime</p>
      <button className={styles.primary}>Continue</button>
    </div>
  )
}