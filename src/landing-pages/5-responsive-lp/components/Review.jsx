import styles from "./Reviews.module.css";
import ReviewItem from "./review-item";

export default function Reviews() {
  return (
    <div className={styles.container}>
      <h1>Over 2 million 5-star review.</h1>
      <div className={styles.reviewBox}>
        <ReviewItem
          text={
            "When I cannot fall asleep, I turn on this app and am out within 5 minutes."
          }
          author={"Brandy from Houston"}
        />
        <ReviewItem
          text={
            "I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me."
          }
          author={"John from Chicago"}
        />
        <ReviewItem
          text={
            "I have tried other meditation and gratitude apps, but this one has everything and the best teachers."
          }
          author={"Allison from San Jose"}
        />
        <ReviewItem
          text={
            "I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me."
          }
          author={"Jasmine from Bend"}
        />
      </div>
    </div>
  );
}
