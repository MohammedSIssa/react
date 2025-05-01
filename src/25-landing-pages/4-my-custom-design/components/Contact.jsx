import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bottom}></div>
        <div className={styles.box1}>
          <h1>Ready to Work with Us?</h1>
        </div>
        <div className={styles.box2}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <br />
            <textarea placeholder="Message.."></textarea>
          </form>
          <button type="submit" onClick={(e) => e.preventDefault()}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
