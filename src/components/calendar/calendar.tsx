import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";

import styles from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarComp = () => {
  const [calendarData, setCalendarData] = useState("");
  const [open, setOpen] = useState(false);

  const componentRef = useRef<HTMLDivElement>(null);

  function handleSelect(date: Date) {
    setCalendarData(format(date, "MM/dd/yyyy"));
  }

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
    setCalendarData(format(new Date(), "MM/dd/yyyy"));
  }, []);

  function hideOnEscape(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function hideOnClickOutside(e: MouseEvent) {
    // console.log(componentRef.current);
    // console.log(e.target);
    if (componentRef.current && !(componentRef.current as Node).contains(e.target as Node)) {
      setOpen(false);
    }
  }

  return (
    <div className={styles.calenderWrap}>
      <input
        className={styles.input}
        value={calendarData}
        onClick={() => {
          setOpen(prev => !prev);
        }}
      />
      <div ref={componentRef}>{open && <Calendar date={new Date()} className={styles.calendarElement} onChange={handleSelect} />}</div>
    </div>
  );
};

export default CalendarComp;
