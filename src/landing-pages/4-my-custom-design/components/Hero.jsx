import styles from "./Hero.module.css";
import productImage from "../assets/hero-product.svg";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}></div>
      <div className={styles.bottom}></div>
      <div className={styles.circle}></div>
      <div className={styles.heroBg}></div>
      <div className={styles.content}>
        <div className={styles.box1}>
          <h1>Landing Page 3</h1>
          <p>
            Get started with our modern tools and <br />
            enhance your productivity today.
          </p>
          <button className={styles.learnMore}>
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.105.074l.014.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.092l.01-.009l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="#533102"
                  d="M18 4.5A1.5 1.5 0 0 1 19.5 6v8a1.5 1.5 0 0 1-3 0V9.621l-9.097 9.097a1.5 1.5 0 0 1-2.12-2.122L14.377 7.5H10a1.5 1.5 0 1 1 0-3z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div className={styles.box2}>
          <img src={productImage} alt="" />
        </div>
      </div>
    </div>
  );
}
