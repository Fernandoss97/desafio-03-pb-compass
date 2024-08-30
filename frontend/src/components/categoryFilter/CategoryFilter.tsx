import React, { useState } from "react";
import styles from "./categoryFilter.module.css";

type CategoryFilterProps = {
  options: string[];
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <form className={styles.form}>
      <h3>Categories</h3>
      {options.map(option => (
        <label key={option} className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            value={option}
            checked={selectedValue === option}
            onChange={e => setSelectedValue(e.target.value)}
          />
          {option}
        </label>
      ))}
    </form>
  );
};

export default CategoryFilter;
