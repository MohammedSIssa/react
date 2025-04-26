import Home from "./pages/Home";
import styles from './Gift.module.css'
import Memories from "./pages/Memories";

const Gift = () => {
  return (
    <div className={styles.container}>
      <Memories />
    </div>
  )
}

export default Gift