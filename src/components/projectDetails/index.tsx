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

// import styles from "./style.module.scss";

const ProjecDetails = () => {
  return (
    // <div className={styles.details}>
    //   <div className={styles.details__img}>
    //     <span>T</span>
    //   </div>
    //   <div className={styles.details__text}>
    //     <h4>Time Tracker</h4>
    //     <p>LINKNBIT</p>
    //     <h4>No to-do</h4>
    //   </div>
    // </div>
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: "#7b0e09", fontSize: "16px", fontWeight: "bold" }}>T</Avatar>
      </ListItemAvatar>
      {/* <ListItemText primary="Time Tracker" secondary="LINKNBIT" /> */}
      <ListItemText
        primary={
          <Typography noWrap sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Time Tracker
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
    </ListItem>
  );
};

export default ProjecDetails;
