import { Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";
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

  const screenShotsData = [
    {
      id: 1,
      startTime: new Date().setHours(0, 50, 0, 0),
      endTime: new Date().setHours(1, 20, 0, 0),
      activity: "2% of 7 minutes"
    },
    {
      id: 2,
      startTime: new Date().setHours(13, 0, 0, 0),
      endTime: new Date().setHours(14, 0, 0, 0),
      activity: "80% of 10 minutes"
    },
    {
      id: 3,
      startTime: new Date().setHours(9, 15, 0, 0),
      endTime: new Date().setHours(9, 30, 0, 0),
      activity: "10% of 15 minutes"
    },
    {
      id: 4,
      startTime: new Date().setHours(3, 45, 0, 0),
      endTime: new Date().setHours(4, 0, 0, 0),
      activity: "20% of 10 minutes"
    },
    {
      id: 5,
      startTime: new Date().setHours(7, 30, 0, 0),
      endTime: new Date().setHours(8, 0, 0, 0),
      activity: "8% of 20 minutes"
    },
    {
      id: 6,
      startTime: new Date().setHours(15, 45, 0, 0),
      endTime: new Date().setHours(16, 0, 0, 0),
      activity: "25% of 15 minutes"
    },
    {
      id: 7,
      startTime: new Date().setHours(11, 0, 0, 0),
      endTime: new Date().setHours(11, 30, 0, 0),
      activity: "12% of 30 minutes"
    },
    {
      id: 8,
      startTime: new Date().setHours(5, 20, 0, 0),
      endTime: new Date().setHours(5, 40, 0, 0),
      activity: "4% of 20 minutes"
    },
    {
      id: 9,
      startTime: new Date().setHours(18, 15, 0, 0),
      endTime: new Date().setHours(18, 45, 0, 0),
      activity: "15% of 30 minutes"
    },
    {
      id: 10,
      startTime: new Date().setHours(20, 0, 0, 0),
      endTime: new Date().setHours(20, 30, 0, 0),
      activity: "50% of 60 minutes"
    },
    {
      id: 11,
      startTime: new Date().setHours(2, 0, 0, 0),
      endTime: new Date().setHours(2, 15, 0, 0),
      activity: "15% of 15 minutes"
    },
    {
      id: 12,
      startTime: new Date().setHours(12, 45, 0, 0),
      endTime: new Date().setHours(13, 0, 0, 0),
      activity: "5% of 15 minutes"
    },
    {
      id: 13,
      startTime: new Date().setHours(6, 0, 0, 0),
      endTime: new Date().setHours(6, 30, 0, 0),
      activity: "10% of 30 minutes"
    },
    {
      id: 14,
      startTime: new Date().setHours(10, 20, 0, 0),
      endTime: new Date().setHours(10, 45, 0, 0),
      activity: "30% of 25 minutes"
    },
    {
      id: 15,
      startTime: new Date().setHours(17, 30, 0, 0),
      endTime: new Date().setHours(17, 45, 0, 0),
      activity: "10% of 15 minutes"
    },
    {
      id: 16,
      startTime: new Date().setHours(21, 0, 0, 0),
      endTime: new Date().setHours(21, 15, 0, 0),
      activity: "25% of 15 minutes"
    },
    {
      id: 17,
      startTime: new Date().setHours(4, 30, 0, 0),
      endTime: new Date().setHours(5, 0, 0, 0),
      activity: "10% of 30 minutes"
    },
    {
      id: 18,
      startTime: new Date().setHours(8, 45, 0, 0),
      endTime: new Date().setHours(9, 15, 0, 0),
      activity: "20% of 30 minutes"
    },
    {
      id: 19,
      startTime: new Date().setHours(14, 45, 0, 0),
      endTime: new Date().setHours(15, 0, 0, 0),
      activity: "5% of 15 minutes"
    },
    {
      id: 20,
      startTime: new Date().setHours(19, 30, 0, 0),
      endTime: new Date().setHours(20, 0, 0, 0),
      activity: "10% of 30 minutes"
    }
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
      <Box sx={{ mt: 4, justifyContent: "center", display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {screenShotsData ? (
          screenShotsData.map((item, idx) => <ScreenShotsCard key={idx} data={item} />)
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 1 }}>
            <img src="https://server-assets.hubstaff.com/4e1885b5dc/vite/no-activity.379c2c78.svg" width={420} height={360} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              There isn't any activity tracked yet for this day. To track time{" "}
              <Link sx={{ color: "#2aa7ff", textDecoration: "none" }} href="https://app.hubstaff.com/download">
                use one of our apps.
              </Link>
            </Typography>
          </Box>
        )}
      </Box>
      ;
    </div>
  );
};

export default ScreenShots;
