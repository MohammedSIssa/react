import styles from "./review-item.module.css";
import { Quote, Star } from "lucide-react";

export default function ReviewItem({ text, author }) {
  return (
    <div className={styles.card}>
      <Quote size={100} color="rgba(250,250,250,0.23)" fill="rgba(250,250,250,1)" />
      <p className={styles.reviewText}>{text}</p>
      <p className={styles.author}>{author}</p>
      <div className={styles.stars}>
        <Star color="gold" fill="gold" />
        <Star color="gold" fill="gold" />
        <Star color="gold" fill="gold" />
        <Star color="gold" fill="gold" />
        <Star color="gold" fill="gold" />
      </div>
    </div>
  );
}
