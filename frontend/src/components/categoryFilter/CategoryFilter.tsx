import styles from "./categoryFilter.module.css";
import { TypeInterface } from "../types/Types";
import { useState } from "react";

type CategoryFilterProps = {
  options: TypeInterface[];
};

const CategoryFilter = ({ options }: CategoryFilterProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <form className={styles.form}>
      <h3>Categories</h3>
      {options.map(option => (
        <label key={option._id} className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            value={option.name}
            checked={selectedValue === option.name}
            onChange={e => setSelectedValue(e.target.value)}
          />
          {option.name}
        </label>
      ))}
    </form>
  );
};

export default CategoryFilter;
