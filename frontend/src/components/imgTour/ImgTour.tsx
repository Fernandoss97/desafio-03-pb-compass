import styles from "./imgTour.module.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { TourInterface } from "../types/Types";

type ImgTourProps = {
  tour: TourInterface;
};

const ImagTour = ({ tour }: ImgTourProps) => {
  return (
    <div className={styles.ct_img}>
      <div className={styles.img_control}>
        <div className={styles.ct_icon_control}>
          <span>Video</span>
          <AiOutlineVideoCamera className={styles.icon} />
        </div>
        <div className={styles.ct_icon_control}>
          <span>Gallery</span>
          <GrGallery className={styles.icon} />
        </div>
      </div>
      <img src={tour.imageUrl} alt="" />
    </div>
  );
};

export default ImagTour;
