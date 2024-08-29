import styles from "./tourCard.module.css";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const TourCard = () => {
  return (
    <div className={styles.ct_card}>
      <div className={styles.ct_img}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/desafio-03-8b2a7.appspot.com/o/card-tour.jpg?alt=media&token=b20243a5-bd1a-40b6-b5c7-ddbb074e701a"
          alt=""
        />
        <div className={styles.ct_fav}>
          <MdFavoriteBorder />
        </div>
      </div>
      <div className={styles.ct_info}>
        <div className={styles.ct_location}>
          <p>Rio de Janeiro, Brazil </p>
          <h2>Wonders of the West Coast & Kimberley</h2>
        </div>
        <div className={styles.ct_reviews}>
          <div className={styles.ct_rv}>
            <div className={styles.ct_ReviewAverage}>
              <FaStar />
              <span>4.8</span>
            </div>
            <span className={styles.reviewsNum}>15 reviews</span>
          </div>
          <div className={styles.ct_duration}>
            <FaRegClock />
            <span>7days</span>
          </div>
        </div>
        <div className={styles.ct_price}>
          <p>Starting From</p>
          <span>$520</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
