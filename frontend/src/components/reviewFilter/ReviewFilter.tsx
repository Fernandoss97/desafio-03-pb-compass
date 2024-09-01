import { useState } from "react";
import styles from "./reviewFilter.module.css";

type ReviewFilterProps = {
  reviewFilter: string;
  setReviewFilter: (value: string) => void;
};

const ReviewFilter = ({ reviewFilter, setReviewFilter }: ReviewFilterProps) => {
  return (
    <form className={styles.form}>
      <h3>Reviews</h3>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={5}
          checked={reviewFilter === "5"}
          onChange={e => setReviewFilter(e.target.value)}
        />
        <p>5 Stars</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={4}
          checked={reviewFilter === "4"}
          onChange={e => setReviewFilter(e.target.value)}
        />
        <p>4 Stars & Up</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={3}
          checked={reviewFilter === "3"}
          onChange={e => setReviewFilter(e.target.value)}
        />
        <p>3 Stars & Up</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={2}
          checked={reviewFilter === "2"}
          onChange={e => setReviewFilter(e.target.value)}
        />
        <p>2 Stars & Up</p>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input_radio}
          type="radio"
          value={1}
          checked={reviewFilter === "1"}
          onChange={e => setReviewFilter(e.target.value)}
        />
        <p>1 Stars & Up</p>
      </label>
    </form>
  );
};

export default ReviewFilter;
