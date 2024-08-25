import styles from "./searchFilter.module.css";
import { CiSearch } from "react-icons/ci";

const SearchFilter = () => {
  return (
    <div className={styles.container}>
      <h3>Search</h3>
      <div className={styles.ct_input}>
        <input type="text" placeholder="Type anything" />
        <CiSearch className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchFilter;
