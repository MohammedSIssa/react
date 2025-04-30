import styles from "./ReadyToShip.module.css";

export default function ReadyToShip() {
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <div className={styles.topBox__box1}>
          <h1>
            Ready to Ship with
            <br />
            Confidence?
          </h1>
        </div>
        <div className={styles.topBox__box2}>
          {" "}
          <button className={styles.requestBtn}>
            Request a Quote{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
            >
              <path
                fill="#111"
                fillRule="evenodd"
                d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.middleBox}>
        <div className={styles.middleBox_box1}>
          <div className={styles.middleBox_box1_box1}>
            <h5>Head office</h5>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum exa</p>
            <p>Lorem ipsum drissa</p>
          </div>
          <div className={styles.middleBox_box1_box2}>
            <h5>Postal & Visitor address</h5>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum exa</p>
            <p>Lorem ipsum drissa</p>
          </div>
        </div>
        <div className={styles.middleBox_box2}>
          <h5>Email</h5>
          <p>info@globalshipping.com</p>
          <h5>Phone</h5>
          <p>+123 456 7890</p>
        </div>
      </div>
      <div className={styles.bottomBox}></div>
    </div>
  );
}
