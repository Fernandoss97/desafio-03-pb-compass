import styles from "./destFilter.module.css";
import { ContinentInterface } from "../types/Types";

type DestFilterProps = {
  continents: ContinentInterface[];
  countryFilter: string;
  setCountryFilter: (value: string) => void;
};

const DestFilter = ({ continents, countryFilter, setCountryFilter }: DestFilterProps) => {
  return (
    <form className={styles.form}>
      <h2>Destinations</h2>
      {continents.map(continent => (
        <div key={continent._id} className={styles.dest_info}>
          <h3>{continent.name}</h3>
          {continent.countries.map(country => (
            <label key={country._id} className={styles.label}>
              <input
                className={styles.input}
                type="radio"
                value={country.name}
                checked={countryFilter === country.name}
                onChange={e => setCountryFilter(e.target.value)}
              />
              <p>{country.name}</p>
            </label>
          ))}
        </div>
      ))}
    </form>
  );
};

export default DestFilter;
