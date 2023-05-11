import React from "react";

import styles from "./style.module.scss";

const TimeToday = ({ activityTotal }: { activityTotal: string }) => {
  return (
    <div className={styles.time}>
      <h4>
        Today: <span>{activityTotal}</span>
      </h4>
    </div>
  );
};

export default TimeToday;
