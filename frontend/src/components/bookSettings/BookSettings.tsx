import styles from "./bookSettings.module.css";
import { useEffect, useState } from "react";
import { TourInterface } from "../types/Types";

type BookSettingsProps = {
  tour: TourInterface;
};

const BookSettings = ({ tour }: BookSettingsProps) => {
  let [adults, setAdults] = useState(0);
  let [sumAdults, setSumAdults] = useState(0);
  let [kids, setKids] = useState(0);
  let [sumKids, setSumKids] = useState(0);
  let [children, setChildren] = useState(0);
  let [sumChildren, setSumChildren] = useState(0);

  let total = sumAdults + sumKids + sumChildren;

  const calculateTotal = () => {
    if (adults > 0) {
      setSumAdults(tour.from * adults);
    } else {
      setSumAdults(0);
    }

    if (kids > 0) {
      setSumKids(tour.from * kids);
    } else {
      setSumKids(0);
    }

    if (children > 0) {
      setSumChildren(tour.from * children);
    } else {
      setSumChildren(0);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [adults, kids, children]);

  return (
    <div className={styles.container}>
      <div className={styles.ct_price}>
        <span>${tour.from}</span>
        <p>/ per person</p>
      </div>
      <div className={styles.ct_time}>
        <label className={styles.ct_label}>
          Date
          <input type="date" placeholder="Choose date" />
        </label>
        <label className={styles.ct_label}>
          Time
          <select id="">
            <option value="teste">Time 1</option>
            <option value="teste">Time 2</option>
            <option value="teste">Time 3</option>
          </select>
        </label>
      </div>
      <div className={styles.ct_ticket}>
        <p className={styles.title}>Ticket</p>
        <div className={styles.ct_qtd}>
          <p>Adults (18+ years)</p>
          <div className={styles.qtd_picker}>
            <button
              onClick={e => (adults === 0 ? setAdults(0) : setAdults(a => a - 1))}
              className={styles.bt_qtd}
            >
              -
            </button>
            <span>{adults}</span>
            <button onClick={e => setAdults(a => a + 1)} className={styles.bt_qtd}>
              +
            </button>
          </div>
        </div>
        <div className={styles.ct_qtd}>
          <p>Kids (12+ years)</p>
          <div className={styles.qtd_picker}>
            <button
              onClick={e => (kids === 0 ? setKids(0) : setKids(a => a - 1))}
              className={styles.bt_qtd}
            >
              -
            </button>
            <span>{kids}</span>
            <button onClick={e => setKids(a => a + 1)} className={styles.bt_qtd}>
              +
            </button>
          </div>
        </div>
        <div className={styles.ct_qtd}>
          <p>Children (3+ years)</p>
          <div className={styles.qtd_picker}>
            <button
              onClick={e => (children === 0 ? setChildren(0) : setChildren(a => a - 1))}
              className={styles.bt_qtd}
            >
              -
            </button>
            <span>{children}</span>
            <button onClick={e => setChildren(a => a + 1)} className={styles.bt_qtd}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className={styles.ct_total}>
        <p>Total</p>
        <span>${total}</span>
      </div>
      <button className={styles.bt_book}>Book Now</button>
    </div>
  );
};

export default BookSettings;
