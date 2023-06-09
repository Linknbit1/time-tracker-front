// import Avatar from "@mui/material/Avatar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemText from "@mui/material/ListItemText";
// import ImageIcon from "@mui/icons-material/Image";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

import timeSlots from "../timeData";

// import styles from "./style.module.scss";

const ProjectDetails = () => {
  return (
    <>
      {timeSlots.map((val, index) => (
        <ListItem>
          <React.Fragment key={index}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "#7b0e09", fontSize: "16px", fontWeight: "bold" }}>T</Avatar>
            </ListItemAvatar>
            {/* <ListItemText primary="Time Tracker" secondary="LINKNBIT" /> */}
            <ListItemText
              primary={
                <Typography noWrap sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  {val.projectName}
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
      ))}
    </>
  );
};

export default ProjectDetails;
