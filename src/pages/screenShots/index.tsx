import { Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

import Calender from "../../components/calendar/calendar";
import ScreenShotsCard from "../../components/card/screensshots";
import Heading from "../../components/heading";

const ScreenShots = () => {
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
      <Heading tab>Screenshots</Heading>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Calender />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={members}
          sx={{ width: 150 }}
          size="small"
          renderInput={params => <TextField {...params} label="Member" required />}
        />
      </Box>
      <Box sx={{ display: "flex", border: "1px solid #e4e9ef", height: "164px", width: "392px", borderRadius: "6px", mt: 5, p: 2 }}>
        <Box sx={{ width: "50%" }}>
          <Typography variant="h6" sx={{ fontSize: "11px", color: "#7a8798", fontWeight: "500" }}>
            WORKED TIME
          </Typography>
          <Typography sx={{ fontSize: "31px", fontWeight: "300", color: "#2b343f", pt: 5 }}>0:51</Typography>
        </Box>
        <Box sx={{ width: "50%", borderLeft: "1px solid #e4e9ef" }}>
          <Typography variant="h6" sx={{ fontSize: "11px", color: "#7a8798", fontWeight: "500", pl: 2 }}>
            AVG. ACTIVITY
          </Typography>
          <Typography sx={{ fontSize: "31px", fontWeight: "300", color: "#2b343f", pt: 5, pl: 2 }}>23%</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <ScreenShotsCard />
      </Box>
    </div>
  );
};

export default ScreenShots;
