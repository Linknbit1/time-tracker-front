import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button";
import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";

import styles from "./style.module.scss";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarComp = () => {
  // const [calendarData, setCalendarData] = useState("");
  const [calendarData, setCalendarData] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  // const date = new Date(calendarData);
  const componentRef = useRef<HTMLDivElement>(null);

  function handleSelect(date: Date) {
    const formattedDate = format(date, "MM/dd/yyyy");
    setCalendarData(new Date(formattedDate));
  }

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

  return (
    <div className={styles.calenderWrap}>
      <Button
        variant="outlined"
        endIcon={<CalendarMonthIcon sx={{ color: "#2aa7ff", fontSize: "18px !important" }} />}
        onClick={() => {
          setOpen(prev => !prev);
        }}
        size="small"
        sx={{ width: "180px !important" }}
      >
        {format(calendarData, "EEE, MMM d, yyyy")}
      </Button>
      <div ref={componentRef}>{open && <Calendar date={calendarData} className={styles.calendarElement} onChange={handleSelect} />}</div>
    </div>
  );
};

export default CalendarComp;
