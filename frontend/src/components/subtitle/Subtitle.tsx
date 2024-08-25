import React from "react";
import styles from "./subtitle.module.css";

type SubtitleProps = {
  title: string;
  subtitle: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ct_sub}>
        <div className={styles.left_detail}></div>
        <h3>{subtitle}</h3>
        <div className={styles.right_detail}></div>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default Subtitle;
