import styles from "./tourCard.module.css";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { TourInterface } from "../types/Types";
import React, { useEffect, useState } from "react";
import axios, { isAxiosError, AxiosError } from "axios";
import { AverageReviewInterface } from "../types/Types";
import { baseURL } from "../../config/apiConfig";
import { Link } from "react-router-dom";

type TourCardProps = {
  tour: TourInterface;
};

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const [averageReview, setAverageReview] = useState<AverageReviewInterface>();

  const fetchAverageReviews = async () => {
    try {
      const res = await axios.get(`${baseURL}/review/average/${tour._id}`);
      setAverageReview(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAverageReviews();
  }, []);

  return (
    <div className={styles.ct_card}>
      <Link to={`/tour-details/${tour._id}`}>
        <div className={styles.ct_img}>
          <img src={tour.city.imageURL} alt="" />
          <div className={styles.ct_fav}>
            <MdFavoriteBorder />
          </div>
        </div>
      </Link>
      <div className={styles.ct_info}>
        <div className={styles.ct_location}>
          <p>
            {tour.city.name}, {tour.city.country.name}{" "}
          </p>
          <h2>{tour.title}</h2>
        </div>
        <div className={styles.ct_reviews}>
          <div className={styles.ct_rv}>
            <div className={styles.ct_ReviewAverage}>
              <FaStar />
              <span>{!averageReview ? 0 : averageReview.overallAverage}</span>
            </div>
            <span className={styles.reviewsNum}>{tour.reviews.length} reviews</span>
          </div>
          <div className={styles.ct_duration}>
            <FaRegClock />
            <span>{tour.duration}days</span>
          </div>
        </div>
        <div className={styles.ct_price}>
          <p>Starting From</p>
          <span>${tour.from}</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
