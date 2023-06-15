import React from "react";

import CalendarComp from "../../components/calendar/calendar";
import DateRange from "../../components/calendar/dateRange";
import DateRangePicker from "../../components/calendar/dateRangePicker";

function Dashboard() {
  return (
    <div>
      calender:
      <CalendarComp />
      Date Range:
      <DateRange />
      Date Range Picker:
      <DateRangePicker />
    </div>
  );
}

export default Dashboard;
