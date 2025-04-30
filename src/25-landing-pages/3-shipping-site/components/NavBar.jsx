import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarBox}>
        <p>Global<b>Shipping</b></p>
      </div>
      <div className={styles.navBarBox}>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
            >
              <path
                fill="#e3e3e3"
                d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79z"
              ></path>
            </svg>
            Home
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#e3e3e3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 16.008V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.02 2.02 0 0 0-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.02 2.02 0 0 0 2 0l7-4.008c.619-.355 1-1.01 1-1.718M12 22V12m0 0l8.73-5.04m-17.46 0L12 12"
              ></path>
            </svg>
            Services
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 2048 2048"
            >
              <path
                fill="#e3e3e3"
                d="M256 0h1536v2048H256zm1408 1920V128H384v1792zM1024 512v128H512V512zm0 512v128H512v-128zm0 512v128H512v-128zm493-1107l-237 237l-173-173l90-90l83 83l147-147zm0 512l-237 237l-173-173l90-90l83 83l147-147zm0 512l-237 237l-173-173l90-90l83 83l147-147z"
              ></path>
            </svg>
            Tracking
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 32 32"
            >
              <path
                fill="#e3e3e3"
                d="M17 15.07V8.116c1.69.28 3.084 1.102 4.222 2.512l1.556-1.256C21.258 7.49 19.316 6.398 17 6.096V3h-2v3.022c-3.615.22-6 2.26-6 5.22c0 4.274 3.127 5.12 6 5.559v7.161c-2.72-.177-4.019-1.1-5.222-2.59l-1.556 1.256c1.77 2.193 3.733 3.168 6.778 3.337V29h2v-3.045c3.726-.304 6-2.327 6-5.44c0-4.209-3.143-5.015-6-5.445m-6-3.828c0-2.153 2.03-3.054 4-3.213v6.746c-2.57-.423-4-1.043-4-3.533m6 12.71v-6.857c2.567.415 4 1.004 4 3.42c0 2.536-2.19 3.266-4 3.437"
              ></path>
            </svg>
            Pricing
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 512 512"
            >
              <path
                fill="#e3e3e3"
                fillRule="evenodd"
                d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"
              ></path>
            </svg>
            About Us
          </li>
        </ul>
      </div>
    </div>
  );
}
