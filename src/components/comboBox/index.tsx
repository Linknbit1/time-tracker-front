import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function ComboBox() {
  const CustomTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      fontSize: "20px",
      border: "2px solid red"
    }
  });

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{
        width: 540
      }}
      renderInput={params => (
        <TextField
          {...params}
          label="PROJECT*"
          size="medium"
          placeholder="Projects"
          sx={{
            "& .MuiTextField-root": {
              fontSize: "20px",
              border: "2px solid red"
            }
          }}
        />
      )}
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
