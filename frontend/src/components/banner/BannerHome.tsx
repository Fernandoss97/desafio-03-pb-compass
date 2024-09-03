import styles from "./bannerHome.module.css";

const Banner = () => {
  return (
    <div className={styles.ct_banner}>
      <div className={styles.ct_txt}>
        <h2>Save 15% off in Worldwide</h2>
        <div className={styles.ct_title}>
          <h1>Travel & Adventures</h1>
          <p>Find awesome hotel, tour, car and activities in London</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
