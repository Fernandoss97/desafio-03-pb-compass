import { useState } from "react";
import styles from "./sliderFilter.module.css";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

type SliderFilterProps = {
  priceFilter: number;
  setPriceFilter: (value: number) => void;
};

const SliderFilter = ({ priceFilter, setPriceFilter }: SliderFilterProps) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceFilter(newValue as number);
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
        <StyledSlider max={1000} value={priceFilter} onChange={handleChange} color="secondary" />
      </div>
      <div className={styles.ct_price}>
        <span>${priceFilter?.toFixed(2)}</span>
        <p>$1.000</p>
      </div>
      {/* <button>Submit</button> */}
    </div>
  );
};

export default SliderFilter;
