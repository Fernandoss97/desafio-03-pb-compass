import styles from "./searchBar.module.css";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [dest, setDest] = useState("");
  const [type, setType] = useState("");
  const [when, setWhen] = useState("");
  const [guests, setGuests] = useState("");

  const navigate = useNavigate();

  const queryParams = new URLSearchParams();

  const handleSearch = () => {
    queryParams.set("type", type);
    queryParams.set("country", dest);
    queryParams.set("when", when);
    queryParams.set("guests", guests);

    console.log(queryParams);

    navigate(`/tour-package?${queryParams}`);
  };

  return (
    <form className={styles.form}>
      <label>
        Destination
        <div className={styles.ct_input}>
          <IoPaperPlaneOutline className={styles.icons} />
          <input
            value={dest}
            onChange={e => setDest(e.target.value)}
            className={styles.input}
            type="text"
            id="dest"
            placeholder="Where to go?"
          />
        </div>
      </label>

      <label>
        Type
        <div className={styles.ct_input}>
          <CiFlag1 className={styles.icons} />
          <input
            value={type}
            onChange={e => setType(e.target.value)}
            className={styles.input}
            type="text"
            id="actv"
            placeholder="Activity"
          />
        </div>
      </label>

      <label>
        When
        <div className={styles.ct_input}>
          <CiCalendar className={styles.icons} />
          <input
            value={when}
            onChange={e => setWhen(e.target.value)}
            className={styles.input}
            type="date"
            id="date"
            placeholder="Date"
          />
        </div>
      </label>

      <label>
        Guests
        <div className={styles.ct_input}>
          <LuUsers className={styles.icons} />
          <input
            value={guests}
            onChange={e => setGuests(e.target.value)}
            className={styles.input}
            type="text"
            id="guests"
            placeholder="0"
          />
        </div>
      </label>
      <button
        onClick={handleSearch}
        disabled={
          dest.length === 0 || type.length === 0 || when.length === 0 || guests.length === 0
            ? true
            : false
        }
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
