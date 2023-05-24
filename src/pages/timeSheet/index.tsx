import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";

// import DataTable from "../../components/dataTable";
import Heading from "../../components/heading";
import DropDownMenu from "../../components/menu/index";
import ProjecDetails from "../../components/projectDetails";
import Table from "../../components/table";
// import Table from "../../components/tableCustom";
// import StyledMenu from "../../components/tableDropdown";
import TimeBar from "../../components/timeBar";
import TimeToday from "../../components/todayTime";

import { detail } from "./tableData";

const TimeSheet = () => {
  const [activityTotal, setActivityTotal] = useState<string>("");

  const columns: GridColDef[] = [
    {
      field: "project",
      headerName: "Project",
      // width: 450,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: () => <ProjecDetails />
    },
    { field: "activity", headerName: "Activity", width: 190, cellClassName: "name-column--cell" },
    { field: "idle", headerName: "Idle", width: 190, cellClassName: "name-column--cell" },
    {
      field: "manual",
      headerName: "Manual",
      width: 190,

      cellClassName: "name-column--cell"
    },
    {
      field: "duration",
      headerName: "Duration",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 190,

      cellClassName: "name-column--cell"
      // valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`
    },
    {
      field: "time",
      headerName: "Time",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 190,

      cellClassName: "name-column--cell"
      // valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`
    },
    {
      field: "status",
      headerName: "",
      width: 190,

      cellClassName: "name-column--cell",
      renderCell: () => <DropDownMenu />
    }
  ];

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
