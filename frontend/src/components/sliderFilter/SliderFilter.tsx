import { useState } from "react";
import styles from "./sliderFilter.module.css";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const SliderFilter = () => {
  const [value, setValue] = useState<number>();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
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
        <StyledSlider max={150} value={value} color="secondary" onChange={handleChange} />
      </div>
      <div className={styles.ct_price}>
        <span>${value?.toFixed(2)}</span>
        <p>$150.00</p>
      </div>
      <button>Submit</button>
    </div>
  );
};

export default SliderFilter;
