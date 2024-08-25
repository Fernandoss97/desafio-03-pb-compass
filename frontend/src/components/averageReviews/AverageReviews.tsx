import ProgressBarLib from "@ramonak/react-progress-bar";
import styles from "./averageReviews.module.css";
import { FaStar } from "react-icons/fa";
import ProgressBar from "../progressBar/ProgressBar";
import { useState } from "react";

interface AverageReviewsProps {
  overallAverage: number;
}

const AverageReviews: React.FC<AverageReviewsProps> = ({ overallAverage }) => {
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
          <span>{overallAverage.toFixed(1)}</span>
          <div className={styles.ct_tag}>
            <FaStar />
            <p>{tag}</p>
          </div>
        </div>
        <div className={styles.ct_average}>
          <ProgressBar label="Services" value={1} />
          <ProgressBar label="Locations" value={5} />
          <ProgressBar label="Amenities" value={2} />
          <ProgressBar label="Prices" value={4} />
          <ProgressBar label="Food" value={2} />
          <ProgressBar label="Room comfort and quality" value={3} />
        </div>
      </div>
    </div>
  );
};

export default AverageReviews;
