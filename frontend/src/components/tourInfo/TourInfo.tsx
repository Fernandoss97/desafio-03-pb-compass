import styles from "./tourInfo.module.css";
import { CiLocationOn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const TourInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ct_top}>
        <div className={styles.ct_loc}>
          <CiLocationOn className={styles.icon} />
          <p>Budapeste, Hungary</p>
          <span>View on map</span>
        </div>
        <div className={styles.ct_icons}>
          <CiShare2 className={styles.icon} />
          <IoMdHeartEmpty className={styles.icon} />
        </div>
      </div>
      <h1>Wonders of the West Coast & Kimberly</h1>
      <div className={styles.ct_data}>
        <div className={styles.ct_from}>
          <p>From</p>
          <span>$104</span>
        </div>
        <div className={styles.data}>
          <p>Duration</p>
          <span>7 days</span>
        </div>
        <div className={styles.data}>
          <p>Max People</p>
          <span>25</span>
        </div>
        <div className={styles.data}>
          <p>Min Age</p>
          <span>12+</span>
        </div>
        <div className={styles.data}>
          <p>Tour Type</p>
          <span>Adventure, Beachs</span>
        </div>
        <div className={styles.ct_rev}>
          <p>Reviews</p>
          <div className={styles.ct_rev_data}>
            <IoIosStar className={styles.star_icon} />
            <span>4.8</span>
            <p>(15 reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;
