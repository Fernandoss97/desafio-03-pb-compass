import React from "react";
import styles from "./bannerGlobal.module.css";
import { NavLink } from "react-router-dom";

interface BannerGlobalProps {
  title: string;
}

const BannerGlobal: React.FC<BannerGlobalProps> = ({ title }) => {
  return (
    <div className={styles.ct_banner}>
      <div className={styles.ct_txt}>
        <h1>{title}</h1>
        <div className={styles.links}>
          <NavLink to="/">Home</NavLink>/{" "}
          <span>
            <NavLink to="/tour-package">Tour Package</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerGlobal;
