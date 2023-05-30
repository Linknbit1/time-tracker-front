import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 540 }}
      renderInput={params => <TextField {...params} label="PROJECT*" size="medium" placeholder="Projects" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  {
    label: "Tailor App"
  },
  {
    label: "Gym App"
  },
  {
    label: "Time Tracker"
  },
  {
    label: "Logistics"
  },
  {
    label: "LMS"
  },
  {
    label: "Tailor App"
  },
  {
    label: "Gym App"
  },
  {
    label: "Time Tracker"
  },
  {
    label: "Logistics"
  },
  {
    label: "LMS"
  },
  {
    label: "Tailor App"
  },
  {
    label: "Gym App"
  },
  {
    label: "Time Tracker"
  },
  {
    label: "Logistics"
  },
  {
    label: "LMS"
  },
  {
    label: "Tailor App"
  },
  {
    label: "Gym App"
  },
  {
    label: "Time Tracker"
  },
  {
    label: "Logistics"
  },
  {
    label: "LMS"
  }
];
