import styles from "./destCard.module.css";
import { CityInterface } from "../types/Types";

type DestCardProps = {
  city: CityInterface;
};

const DestCard = ({ city }: DestCardProps) => {
  return (
    <div className={styles.ct_card}>
      <img src={city.imageURL} alt={`${city.name} city image`} />
      <div className={styles.ct_info}>
        <p>{city.travelers} Travelers</p>
        <h2>{city.country.name}</h2>
      </div>
    </div>
  );
};

export default DestCard;
