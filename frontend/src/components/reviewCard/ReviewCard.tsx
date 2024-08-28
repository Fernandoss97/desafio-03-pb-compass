import styles from "./reviewCard.module.css";
import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ct_img}></div>
      <div className={styles.ct_info}>
        <p className={styles.date}>March 20, 2022</p>
        <h2>Sindy Simmons</h2>
        <div className={styles.ct_rv}>
          <div className={styles.ct_ReviewAverage}>
            <FaStar />
            <span>4.8</span>
          </div>
          <p className={styles.reviewsNum}>15 reviews</p>
        </div>
        <p className={styles.comment}>
          Objectively productivate just in time information with dynamic channels. Energistcally
          exploit seamless growth strategies after 24/7 experiences.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
