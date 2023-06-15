import { format } from "date-fns";
import addDays from "date-fns/addDays";
import React, { useEffect, useRef, useState } from "react";
import { DateRange, Range } from "react-date-range";

import styles from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarComp = () => {
  const [calendarData, setCalendarData] = useState("");
  const [open, setOpen] = useState(false);
  const [rangeMeasure, setRangeMeasure] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);

  const componentRef = useRef<HTMLDivElement>(null);

  // function handleSelect(date: Date) {
  //   setCalendarData(format(date, "MM/dd/yyyy"));
  // }

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
      <div ref={componentRef}>
        {open && (
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={rangeMeasure}
            months={1}
            direction="horizontal"
            onChange={item => setRangeMeasure([item.selection])}
            className={styles.calendarElement}
          />
        )}
      </div>
    </div>
  );
};

export default CalendarComp;
