import styles from "./categoryFilter.module.css";
import { TypeInterface } from "../types/Types";
import { useState } from "react";

type CategoryFilterProps = {
  options: TypeInterface[];
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
};

const CategoryFilter = ({ options, categoryFilter, setCategoryFilter }: CategoryFilterProps) => {
  //const [selectedValue, setSelectedValue] = useState("");

  return (
    <form className={styles.form}>
      <h3>Categories</h3>
      {options.map(option => (
        <label key={option._id} className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            value={option.name}
            checked={categoryFilter === option.name}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          {option.name}
        </label>
      ))}
    </form>
  );
};

export default CategoryFilter;
