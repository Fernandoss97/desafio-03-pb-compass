import styles from "./searchFilter.module.css";
import { CiSearch } from "react-icons/ci";

type SearchFilterProps = {
  searchFilter: string;
  setSearchFilter: (value: string) => void;
};

const SearchFilter = ({ searchFilter, setSearchFilter }: SearchFilterProps) => {
  return (
    <div className={styles.container}>
      <h3>Search</h3>
      <div className={styles.ct_input}>
        <input
          className={styles.input}
          value={searchFilter}
          onChange={e => setSearchFilter(e.target.value)}
          type="text"
          placeholder="Type anything"
        />
        <CiSearch className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchFilter;
