import { Box, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <div className={styles.time}>
        <div className={styles.time__field}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["SingleInputDateRangeField"]}
              sx={{
                "& .MuiFormControl-root": {
                  minWidth: "200px !important"
                }
              }}
            >
              <DateRangePicker slots={{ field: SingleInputDateRangeField }} formatDensity="spacious" />
            </DemoContainer>
          </LocalizationProvider>
          <h4>
            Today: <span>{activityTotal}</span>
          </h4>
        </div>
        <div>
          <Box sx={{ mb: 2, minWidth: "150px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Member </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Member " onChange={handleChange}>
                <MenuItem value="Zain">Zain</MenuItem>
                <MenuItem value="Asif">Asif</MenuItem>
                <MenuItem value="Ghayas">Ghayas</MenuItem>
              </Select>
            </FormControl>
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
