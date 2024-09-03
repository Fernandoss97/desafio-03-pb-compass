import styles from "./sliderFilter.module.css";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useState } from "react";

type SliderFilterProps = {
  priceFilter: number;
  setPriceFilter: (value: number) => void;
};

const SliderFilter = ({ setPriceFilter }: SliderFilterProps) => {
  const [price, setPrice] = useState(50);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number);
  };

  const StyledSlider = styled(Slider)({
    color: "#fc5056",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 18,
      width: 18,
    },
  });

  return (
    <div className={styles.container}>
      <h3>Filter By</h3>
      <div className={styles.ct_slider}>
        <StyledSlider max={1000} value={price} onChange={handleChange} color="secondary" />
      </div>
      <div className={styles.ct_price}>
        <span>${price.toFixed(2)}</span>
        <p>$1.000</p>
      </div>
      <button onClick={() => setPriceFilter(price)}>Submit</button>
    </div>
  );
};

export default SliderFilter;
