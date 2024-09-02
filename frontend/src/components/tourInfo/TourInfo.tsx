import styles from "./tourInfo.module.css";
import { CiLocationOn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { TourInterface } from "../types/Types";

type TourInfoProps = {
  tour: TourInterface;
};

const TourInfo = ({ tour }: TourInfoProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.ct_top}>
        <div className={styles.ct_loc}>
          <CiLocationOn className={styles.icon} />
          <p>
            {tour.city.name}, {tour.city.country.name}
          </p>
          <span>View on map</span>
        </div>
        <div className={styles.ct_icons}>
          <CiShare2 className={styles.icon} />
          <IoMdHeartEmpty className={styles.icon} />
        </div>
      </div>
      <h1>{tour.title}</h1>
      <div className={styles.ct_data}>
        <div className={styles.ct_from}>
          <p>From</p>
          <span>${tour.from}</span>
        </div>
        <div className={styles.data}>
          <p>Duration</p>
          <span>{tour.duration} days</span>
        </div>
        <div className={styles.data}>
          <p>Max People</p>
          <span>{tour.maxPeople}</span>
        </div>
        <div className={styles.data}>
          <p>Min Age</p>
          <span>{tour.minAge}+</span>
        </div>
        <div className={styles.data}>
          <p>Tour Type</p>
          <span>{tour.type.name}</span>
        </div>
        <div className={styles.ct_rev}>
          <p>Reviews</p>
          <div className={styles.ct_rev_data}>
            <IoIosStar className={styles.star_icon} />
            <span>{tour.score.overallAverage.toFixed(1)}</span>
            <p>({tour.reviews.length} reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;
