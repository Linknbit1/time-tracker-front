import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";

import MultipleSelect from "../tableDropdown";
import TimeBar from "../timeBar";

interface props {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const FormDialog = ({ toggle, setToggle }: props) => {
  const [activityTotal, setActivityTotal] = React.useState<string>("");

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div>
      <Dialog open={toggle} onClose={handleClose} PaperProps={{ sx: { maxHeight: "50rem" } }}>
        <DialogTitle>Edit time</DialogTitle>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{ backgroundColor: "#7b0e09", fontSize: "16px", fontWeight: "bold" }}
              src="https://nativuspeople.com/wp-content/uploads/2023/02/Zain-Imam.jpg"
            />
          </ListItemAvatar>
          {/* <ListItemText primary="Time Tracker" secondary="LINKNBIT" /> */}
          <ListItemText
            primary={
              <Typography noWrap sx={{ fontSize: "14px" }}>
                Zain Malik
              </Typography>
            }
          />
        </ListItem>
        <MultipleSelect />
        <TimeBar setActivityTotal={setActivityTotal} />

        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button sx={{ backgroundColor: "#fff", border: "1px solid #e4e9ef" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ backgroundColor: "#2aa7ff", border: "1px solid #e4e9ef", color: "#fff" }} onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
