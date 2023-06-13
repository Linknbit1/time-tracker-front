import { Box, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import React from "react";

// import AddTimeDialog from "../addDialog";

import AddTimeDialog from "../addDialog";

import styles from "./style.module.scss";

type timeTodayProps = {
  activityTotal: string;
  setActivityTotal: (newTotal: string) => void;
};
const TimeToday = ({ activityTotal, setActivityTotal }: timeTodayProps) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <>
      <div className={styles.time}>
        <div className={styles.time__field}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["SingleInputDateRangeField"]}
              sx={{
                "& .MuiFormControl-root": {
                  minWidth: "250px !important"
                },
                "& .MuiOutlinedInput-input": {
                  height: "7px"
                }
              }}
            >
              <DateRangePicker
                slots={{ field: SingleInputDateRangeField }}
                formatDensity="spacious"
                sx={{
                  "& .MuiDateRangeCalendar-root > div:first-child": {
                    border: "2px solid red !important"
                  }
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <h4>
            Today: <span>{activityTotal}</span>
          </h4>
        </div>
        <div>
          <Box sx={{ mb: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={members}
              sx={{ width: 150 }}
              size="small"
              renderInput={params => <TextField {...params} label="Member" required />}
            />
          </Box>

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
              textTransform: "none",
              float: "right",
              mr: 0.5
            }}
            variant={"contained"}
          >
            Add time
          </Button>
        </div>
      </div>
      <AddTimeDialog toggle={toggle} setToggle={setToggle} setActivityTotal={setActivityTotal} />
    </>
  );
};

export default TimeToday;
const members = [
  { label: "Zain" },
  { label: "Asif" },
  { label: "Ghayas" },
  { label: "Asfand" },
  { label: "Saif Ullah" },
  { label: "Faizan" },
  { label: "Muneeb" }
];
