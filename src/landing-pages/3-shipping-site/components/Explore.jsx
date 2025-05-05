import styles from "./Explore.module.css";
import seaShippingImage from "../assets/options-ship.jpg";
import landShippingImage from "../assets/options-land.jpg";
import airShippingImage from "../assets/options-air.jpg";

export default function Explore() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <h1>
          Explore our flexible shipping options for{" "}
          <span className={styles.grey}>every need in the world</span>
        </h1>
        <p>
          Wether you're shipping by sea, land, or air, we offer a variety of
          reliable and efficient solutions to suit your cargo requirements.
        </p>
      </div>
      <div className={styles.box2}>
        <img src={seaShippingImage} alt="" />
        <img src={landShippingImage} alt="" />
        <img src={airShippingImage} alt="" />
      </div>
      <div className={styles.box3}>
        <p>
          Reliable and cost-effective for large shipments, <br />
          <b>ensuring global reach and timely delivery</b>
        </p>
        <button className={styles.learnMore}>
          Learn More{" "}
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
  );
}
