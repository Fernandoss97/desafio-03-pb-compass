import ProgressBarLib from "@ramonak/react-progress-bar";
import styles from "./averageReviews.module.css";
import { FaStar } from "react-icons/fa";
import ProgressBar from "../progressBar/ProgressBar";
import { useState } from "react";
import { TourInterface } from "../types/Types";

interface AverageReviewsProps {
  tour: TourInterface;
}

const AverageReviews = ({ tour }: AverageReviewsProps) => {
  const [tag, setTag] = useState("Excellent");

  // if (overallAverage <= 1) {
  //   setTag("Bad");
  // } else if (overallAverage > 1 && overallAverage <= 3) {
  //   setTag("Good");
  // } else if (overallAverage > 3 && overallAverage <= 5) {
  //   setTag("Excellent");
  // }

  return (
    <div className={styles.container}>
      <h2>Average Reviews</h2>
      <div className={styles.ct}>
        <div className={styles.ct_overall}>
          <span>{tour.score.overallAverage.toFixed(1)}</span>
          <div className={styles.ct_tag}>
            <FaStar />
            <p>{tag}</p>
          </div>
        </div>
        <div className={styles.ct_average}>
          <ProgressBar label="Services" value={tour.score.services} />
          <ProgressBar label="Locations" value={tour.score.locations} />
          <ProgressBar label="Amenities" value={tour.score.amenities} />
          <ProgressBar label="Prices" value={tour.score.prices} />
          <ProgressBar label="Food" value={tour.score.food} />
          <ProgressBar label="Room comfort and quality" value={tour.score.roomConfortAndQuality} />
        </div>
      </div>
    </div>
  );
};

export default AverageReviews;
