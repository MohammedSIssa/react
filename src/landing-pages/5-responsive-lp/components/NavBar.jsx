import styles from "./NavBar.module.css";
import { Activity } from "lucide-react";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.box}>
        <div className={styles.boxItem}>
          <Activity color="white" />
        </div>
        <div className={styles.boxItem}><a href='#'>Sleep</a></div>
        <div className={styles.boxItem}><a href='#'>Stress & Anxiety</a></div>
        <div className={styles.boxItem}><a href='#'>Mindfulness</a></div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxItem}><a href='#'>Screeing</a></div>
        <div className={styles.boxItem}><a href='#'>Health</a></div>
        <div className={styles.boxItem}><a href='#'>Log In</a></div>
        <div className={styles.boxItem}>
          <button>Try for Free</button>
        </div>
      </div>
    </div>
  );
}
