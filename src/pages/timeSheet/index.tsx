import React, { useState } from "react";

import Heading from "../../components/heading";
import TimeBar from "../../components/timeBar";
import TimeToday from "../../components/todayTime";

const TimeSheet = () => {
  const [activityTotal, setActivityTotal] = useState<string>("");

  return (
    <div>
      <Heading>View & edit timesheets</Heading>
      <TimeToday activityTotal={activityTotal} />
      <TimeBar setActivityTotal={setActivityTotal} />
    </div>
  );
};

export default TimeSheet;
