import { Typography } from "@mui/material";
import { Box, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";

import DateRangePicker from "../../components/calendar/dateRangePicker";
import AddTimeDialog from "../../components/dialogs/addDialog";
import Heading from "../../components/heading";
import DropDownMenu from "../../components/menu/index";
import Table from "../../components/table";
import TimeBar from "../../components/timeBar";

import detail from "./tableData";

const TimeSheet = () => {
  const [activityTotal, setActivityTotal] = useState<string>("");
  const [toggle, setToggle] = React.useState<boolean>(false);

  const columns: GridColDef[] = [
    {
      field: "projectName",
      headerName: "Project",
      // width: 450,
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: data => {
        return (
          <>
            <ListItem>
              <React.Fragment>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#7b0e09", fontSize: "16px", fontWeight: "bold" }}>T</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography noWrap sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      {data.row.projectName}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography component="div" variant="body2" color="textSecondary" sx={{ fontSize: "10px" }}>
                        LINKNBIT
                      </Typography>
                      <Typography component="div" variant="body2" color="textPrimary" sx={{ fontSize: "14px", fontWeight: "bold", color: "#2b343f" }}>
                        No to-do
                      </Typography>
                    </React.Fragment>
                  }
                />
              </React.Fragment>
            </ListItem>
          </>
        );
      }
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
      cellClassName: "name-column--cell",
      renderCell: data => {
        const duration = data.row.endTime - data.row.startTime;
        const seconds = String(Math.floor(duration / 1000) % 60).padStart(2, "0");
        const minutes = String(Math.floor(duration / 1000 / 60) % 60).padStart(2, "0");
        const hours = String(Math.floor(duration / 1000 / 60 / 60)).padStart(2, "0");

        return <div style={{ color: "#2aa7ff" }}>{`${hours}:${minutes}:${seconds}`}</div>;
      }
    },
    {
      field: "time",
      headerName: "Time",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 190,
      cellClassName: "name-column--cell",
      renderCell: data => {
        const formattedStartTime = new Date(data.row.startTime).toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        });
        const formattedEndTime = new Date(data.row.endTime).toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        });

        return (
          <div style={{ color: "#2aa7ff" }}>
            {formattedStartTime} - {formattedEndTime}
          </div>
        );
      }
    },
    {
      field: "status",
      headerName: "",
      width: 190,
      cellClassName: "name-column--cell",
      renderCell: () => <DropDownMenu setActivityTotal={setActivityTotal} />
    }
  ];

  const members = [
    { label: "Zain" },
    { label: "Asif" },
    { label: "Ghayas" },
    { label: "Asfand" },
    { label: "Saif Ullah" },
    { label: "Faizan" },
    { label: "Muneeb" }
  ];

  return (
    <div>
      <Heading>View & edit timesheets</Heading>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <DateRangePicker />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={members}
          sx={{ width: 150 }}
          size="small"
          renderInput={params => <TextField {...params} label="Member" required />}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
        <Button
          onClick={() => {
            setToggle(prev => !prev);
          }}
          sx={{
            background: "#2aa7ff",
            minWidth: "98px",
            height: "40px",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "6px",
            textTransform: "none"
          }}
          variant={"contained"}
        >
          Add time
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
        <Typography variant="h4" component="h2">
          Today: {activityTotal}
        </Typography>
      </Box>
      {/* <TimeToday activityTotal={activityTotal} setActivityTotal={setActivityTotal} /> */}
      <TimeBar setActivityTotal={setActivityTotal} />
      <Table columns={columns} data={detail} />
      <AddTimeDialog toggle={toggle} setToggle={setToggle} setActivityTotal={setActivityTotal} />
    </div>
  );
};

export default TimeSheet;
