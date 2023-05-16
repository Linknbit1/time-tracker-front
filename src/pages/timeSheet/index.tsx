import React, { useState } from "react";

// import DataTable from "../../components/dataTable";
import Heading from "../../components/heading";
import Table from "../../components/table";
import TimeBar from "../../components/timeBar";
import TimeToday from "../../components/todayTime";

import { columns, detail } from "./tableData";

const TimeSheet = () => {
  const [activityTotal, setActivityTotal] = useState<string>("");

  return (
    <div>
      <Heading>View & edit timesheets</Heading>
      <TimeToday activityTotal={activityTotal} />
      <TimeBar setActivityTotal={setActivityTotal} />
      <Table columns={columns} data={detail} />
      {/* <DataTable /> */}
    </div>
  );
};

export default TimeSheet;
