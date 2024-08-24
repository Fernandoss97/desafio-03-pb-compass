import styles from "./typeCard.module.css";
import { GiRollingSuitcase } from "react-icons/gi";
import { BsSuitcase } from "react-icons/bs";

const TypeCard = () => {
  return (
    <div className={styles.ct_card}>
      <div className={styles.ct_icon}>
        <BsSuitcase />
      </div>
      <div className={styles.ct_type}>
        <p>Adventure</p>
        <span>10 Tours+</span>
      </div>
      <div className={styles.ct_price}>
        <p>From</p>
        <span>$250</span>
      </div>
    </div>
  );
};

export default TypeCard;
