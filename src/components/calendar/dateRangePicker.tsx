import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button";
import { format } from "date-fns";
import addDays from "date-fns/addDays";
import { enUS } from "date-fns/locale";
import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";

import styles from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarComp = () => {
  const [open, setOpen] = useState(false);
  const [rangeMeasure, setRangeMeasure] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  function hideOnEscape(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function hideOnClickOutside(e: MouseEvent) {
    if (componentRef.current && !(componentRef.current as Node).contains(e.target as Node)) {
      setOpen(false);
    }
  }

  const startDate = rangeMeasure.map(date => {
    if (date.startDate) {
      return format(date.startDate, "EEE, MMM d, yyyy", { locale: enUS });
    } else {
      return ""; // or any other fallback value you prefer
    }
  });

  const endDate = rangeMeasure.map(date => {
    if (date.endDate) {
      return format(date.endDate, "EEE, MMM d, yyyy");
    } else {
      return ""; // or any other fallback value you prefer
    }
  });
  console.log(open);

  return (
    <div className={styles.calenderWrap}>
      <Button
        variant="outlined"
        endIcon={<CalendarMonthIcon sx={{ color: "#2aa7ff", fontSize: "18px !important" }} />}
        onClick={() => {
          setOpen(prev => !prev);
        }}
        fullWidth
        size="large"
      >
        {`${startDate} - ${endDate}`}
      </Button>
      <div ref={componentRef}>
        {open && (
          <DateRangePicker
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={rangeMeasure}
            months={2}
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
