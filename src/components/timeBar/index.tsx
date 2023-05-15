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
const TimeBar = ({ setActivityTotal }: { setActivityTotal: (newTotal: string) => void }) => {
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
      startTime: startTime,
      endTime: endTime,
      startTimeInSeconds: secondsToStart,
      endTimeInSeconds: secondsToEnd,
      spanColor: timeSlot.color,
      activity: activity,
      project: timeSlot.projectName
    };
  });

  let activitySum = 0;
  for (let i = 0; i < timeSlotsInSeconds.length; i++) {
    activitySum += timeSlotsInSeconds[i].activity;
  }
  const totalSecondsOfWork = Math.floor((activitySum / 100) * daySeconds); // Calculate total seconds of work
  const hours = Math.floor(totalSecondsOfWork / 3600); // Calculate hours
  const minutes = Math.floor((totalSecondsOfWork % 3600) / 60); // Calculate minutes
  const seconds = totalSecondsOfWork % 60; // Calculate seconds
  const totalTime = `${hours}:${minutes}:${seconds}`;
  setActivityTotal(totalTime);

  return (
    <div
      className={styles.timeBar}
      style={{ "--future-inset": `${timePercentage}%`, "--future-width": `${100 - timePercentage}%` } as CustomCSSProperties}
    >
      <div className={styles.timeBar__body}>
        <div className={styles.timeBar__futureBar}></div>
        {timeSlotsInSeconds.map((timeSlotsInSecond, id) => {
          return (
            <div className={styles.timeBar__timeSpans}>
              <div
                key={id}
                className={styles.timeBar__timeSpan}
                style={
                  {
                    "--time-start": `${timeSlotsInSecond.startTimeInSeconds}%`,
                    "--end-time": `${timeSlotsInSecond.endTimeInSeconds}%`,
                    "--color-time-span": `${timeSlotsInSecond.spanColor}`
                  } as CustomCSSProperties
                }
              >
                <div className={styles.timeBar__info}>
                  <div className={styles.timeBar__project} >{timeSlotsInSecond.project}</div>
                  <div className={styles.timeBar__time}>
                    {new Date(timeSlotsInSecond.startTime).toLocaleTimeString()} - 
                    {new Date(timeSlotsInSecond.endTime).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeBar;
