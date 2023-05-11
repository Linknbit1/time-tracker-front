import { CSSProperties } from "react";
import React from "react";

import timeSlots from "../timeData";

import styles from "./style.module.scss";

interface CustomCSSProperties extends CSSProperties {
  "--future-inset"?: string;
  "--future-width"?: string;
  "--time-start"?: string;
  "--color-time-span": string;
}
const TimeBar = ({ setActivityTotal }: { setActivityTotal: (newTotal: number) => void }) => {
  const daySeconds = 86400;
  const beginningOfDay = new Date();
  beginningOfDay.setHours(0, 0, 0, 0);
  const timePercentage = (Math.floor((new Date().getTime() - beginningOfDay.getTime()) / 1000) / daySeconds) * 100;

  const timeSlotsInSeconds = timeSlots.map(timeSlot => {
    const startTime = timeSlot.startTime;
    const endTime = timeSlot.endTime;
    const secondsToStart = Math.floor(((startTime - beginningOfDay.getTime()) / 1000 / daySeconds) * 100);
    const secondsToEnd = Math.floor(((endTime - beginningOfDay.getTime()) / 1000 / daySeconds) * 100);
    const activity = secondsToEnd - secondsToStart;

    return {
      startTimeInSeconds: secondsToStart,
      endTimeInSeconds: secondsToEnd,
      spanColor: timeSlot.color,
      activity: activity
    };
  });
  let activitySum = 0;
  for (let i = 0; i < timeSlotsInSeconds.length; i++) {
    activitySum += timeSlotsInSeconds[i].activity;
  }
  setActivityTotal((activitySum / 100) * 24);

  return (
    <div
      className={styles.timeBar}
      style={{ "--future-inset": `${timePercentage}%`, "--future-width": `${100 - timePercentage}%` } as CustomCSSProperties}
    >
      <div className={styles.timeBar__body}>
        <div className={styles.timeBar__futureBar}></div>
        {timeSlotsInSeconds.map((timeSlotsInSecond, id) => {
          return (
            <div
              key={id}
              className={styles.timeBar__timeLapse}
              style={
                {
                  "--time-start": `${timeSlotsInSecond.startTimeInSeconds}%`,
                  "--end-time": `${timeSlotsInSecond.endTimeInSeconds}%`,
                  "--color-time-span": `${timeSlotsInSecond.spanColor}`
                } as CustomCSSProperties
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeBar;
