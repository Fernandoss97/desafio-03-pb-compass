import { ReviewInterface, TourInterface } from "../types/Types";
import styles from "./reviewCard.module.css";
import { FaStar } from "react-icons/fa";
import moment from "moment";
import axios from "axios";
import { baseURL } from "../../config/apiConfig";
import { useEffect, useState } from "react";

type ReviewCardProps = {
  review: ReviewInterface;
};

type TotalReviews = {
  userID: string;
  reviewsTotalizer: number;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  const [totalReviews, setTotalReviews] = useState<TotalReviews>();
  const formatedDate = moment(review.createdAt).format("MMMM DD, YYYY");

  const fetchTotalReviews = async () => {
    try {
      const res = await axios.get(`${baseURL}/review/total-by-user/${review.user._id}`);
      setTotalReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTotalReviews();
  }, []);

  // console.log(review.score.overallAverage);
  return (
    <div className={styles.container}>
      <div className={styles.ct_img}></div>
      <div className={styles.ct_info}>
        <p className={styles.date}>{formatedDate}</p>
        <h2>{!review.name ? "Anonymous" : review.name}</h2>
        <div className={styles.ct_rv}>
          <div className={styles.ct_ReviewAverage}>
            <FaStar />
            <span>{!review.score.overallAverage ? 0 : review.score.overallAverage.toFixed(1)}</span>
          </div>
          <p className={styles.reviewsNum}>{totalReviews?.reviewsTotalizer} reviews</p>
        </div>
        <p className={styles.comment}>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
