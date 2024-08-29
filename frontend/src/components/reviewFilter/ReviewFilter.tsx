import { useState } from "react";
import styles from "./reviewFilter.module.css";

const ReviewFilter = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <form className={styles.form}>
      <h3>Reviews</h3>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={5}
          checked={selectedValue === "5"}
          onChange={e => setSelectedValue(e.target.value)}
        />
        <p>5 Stars</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={4}
          checked={selectedValue === "4"}
          onChange={e => setSelectedValue(e.target.value)}
        />
        <p>4 Stars & Up</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={3}
          checked={selectedValue === "3"}
          onChange={e => setSelectedValue(e.target.value)}
        />
        <p>3 Stars & Up</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={2}
          checked={selectedValue === "2"}
          onChange={e => setSelectedValue(e.target.value)}
        />
        <p>2 Stars & Up</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={1}
          checked={selectedValue === "1"}
          onChange={e => setSelectedValue(e.target.value)}
        />
        <p>1 Stars & Up</p>
      </label>
    </form>
  );
};

export default ReviewFilter;
