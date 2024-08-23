import React from "react";
import styles from "./bannerGlobal.module.css";

interface BannerGlobalProps {
  title: string;
}

const BannerGlobal: React.FC<BannerGlobalProps> = ({ title }) => {
  return (
    <div className={styles.ct_banner}>
      <div className={styles.ct_txt}>
        <h1>{title}</h1>
        <p>Home / Tour Package</p>
      </div>
    </div>
  );
};

export default BannerGlobal;
