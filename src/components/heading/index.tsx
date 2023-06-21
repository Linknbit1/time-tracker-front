import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";

interface HeadingProps {
  type?: number;
  children: React.ReactElement<HTMLDivElement> | string;
  tab?: boolean;
}
const Heading = ({ children, tab }: HeadingProps) => {
  const [value, setValue] = React.useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="h2" sx={{ fontSize: "30px", color: "#3e4956", fontWeight: 300 }}>
        {children}
      </Typography>

      {tab && (
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Every 10 min" disableRipple />
            <Tab label="All screenshots" disableRipple />
          </Tabs>
        </Box>
      )}
    </Box>
  );
};

export default Heading;
