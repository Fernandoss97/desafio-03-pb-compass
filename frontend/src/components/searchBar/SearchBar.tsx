import styles from "./searchBar.module.css";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";

const SearchBar = () => {
  return (
    <form className={styles.form}>
      <label>
        Destination
        <div className={styles.ct_input}>
          <IoPaperPlaneOutline className={styles.icons} />
          <input type="text" id="dest" placeholder="Where to go?" />
        </div>
      </label>

      <label>
        Type
        <div className={styles.ct_input}>
          <CiFlag1 className={styles.icons} />
          <input type="text" id="actv" placeholder="Activity" />
        </div>
      </label>

      <label>
        When
        <div className={styles.ct_input}>
          <CiCalendar className={styles.icons} />
          <input type="date" id="date" placeholder="Date" />
        </div>
      </label>

      <label>
        Guests
        <div className={styles.ct_input}>
          <LuUsers className={styles.icons} />
          <input type="text" id="guests" placeholder="0" />
        </div>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
