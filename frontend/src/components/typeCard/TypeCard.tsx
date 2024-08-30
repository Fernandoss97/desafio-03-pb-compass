import styles from "./typeCard.module.css";
import { GiRollingSuitcase } from "react-icons/gi";
import { BsSuitcase } from "react-icons/bs";
import { TypeInterface } from "../types/Types";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../config/apiConfig";

type typeCardProps = {
  type: TypeInterface;
};

const TypeCard = ({ type }: typeCardProps) => {
  const [totalTours, setTotalTours] = useState(0);
  const [cheaperTour, setCheaperTour] = useState(0);
  console.log(cheaperTour);

  const fetchTotalTours = async () => {
    try {
      const res = await axios.get(`${baseURL}/tour/total-by-type/${type._id}`);
      setTotalTours(res.data.tourTotalizer);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCheaperTour = async () => {
    try {
      const res = await axios.get(`${baseURL}/tour/cheaper-by-type/${type._id}`);
      setCheaperTour(res.data.from);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTotalTours();
    fetchCheaperTour();
  }, []);

  return (
    <div className={styles.ct_card}>
      <div className={styles.ct_icon}>
        <BsSuitcase />
      </div>
      <div className={styles.ct_type}>
        <p>{type.name}</p>
        <span>{totalTours} Tours+</span>
      </div>
      <div className={styles.ct_price}>
        <p>From</p>
        <span>${cheaperTour}</span>
      </div>
    </div>
  );
};

export default TypeCard;
