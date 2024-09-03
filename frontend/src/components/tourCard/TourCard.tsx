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
import Skeleton from "@mui/material/Skeleton";

type TourCardProps = {
  tour: TourInterface;
};

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  if (!tour) {
    return (
      <div className={styles.ct_loading}>
        <Skeleton
          animation="wave"
          sx={{ bgcolor: "#d9d9d9" }}
          variant="rectangular"
          width={270}
          height={220}
        />
        <Skeleton variant="text" sx={{ fontSize: "14px" }} />
        <Skeleton variant="text" sx={{ fontSize: "14px" }} />
        <Skeleton variant="text" sx={{ fontSize: "18px" }} />
        <Skeleton variant="rectangular" width={270} height={40} />
        <Skeleton variant="rectangular" width={270} height={60} />
      </div>
    );
  }
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
              <span>{tour.score.overallAverage.toFixed(1)}</span>
            </div>
            <span className={styles.reviewsNum}>{tour.reviews.length} reviews</span>
          </div>
          <div className={styles.ct_duration}>
            <FaRegClock />
            <span>{tour.duration.toFixed()}days</span>
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
