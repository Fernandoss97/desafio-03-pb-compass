import React from "react";
import styles from "./progressBar.module.css";
import ProgressBarLib from "@ramonak/react-progress-bar";

interface ProgressBarProps {
  label: string;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  return (
    <div className={styles.ct}>
      <p>{label}</p>
      <div className={styles.ct_value}>
        <ProgressBarLib
          labelColor="#051036"
          height="10px"
          completed={value}
          maxCompleted={5}
          transitionDuration="1.5s"
          animateOnRender={true}
          isLabelVisible={false}
          className="wrapper"
          bgColor="#fc5056"
          width="200px"
        />
        <span>{value.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
