import CloseIcon from "@mui/icons-material/Close";
import { Autocomplete, Avatar, Button, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { MultiInputTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputTimeRangeField";
import * as React from "react";

import TimeBar from "../../timeBar";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
interface Props {
  splitDialogToggle: boolean;
  setSplitDialogToggle: (value: boolean) => void;
  setActivityTotal: (newTotal: string) => void;
}

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
    padding: "10px 30px"
  },
  "& .MuiAutocomplete-popper": {
    border: "2px solid #e4e9ef ",
    maxHeight: "230px",
    overflowY: "hidden"
  },
  "& .MuiDialogActions-root": {
    padding: "20px 20px"
  },
  "& .MuiDialogTitle-root": {
    padding: "20px 45px 0 30px"
  }
}));

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mt: 2, p: 3, fontSize: "18px", fontWeight: "500" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            mt: 2,
            mb: 2,
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
          size="large"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function SplitTimeDialog({ splitDialogToggle, setSplitDialogToggle, setActivityTotal }: Props) {
  const [value, setValue] = React.useState(1);

  const handleClose = () => {
    setSplitDialogToggle(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const formattedTimes = detail.map(data => {
  //   const formattedStartTime = new Date(data.startTime).toLocaleTimeString([], {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: true
  //   });

  //   const formattedEndTime = new Date(data.endTime).toLocaleTimeString([], {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: true
  //   });

  //   return {
  //     formattedStartTime,
  //     formattedEndTime
  //   };
  // });

  // formattedTimes.forEach(time => {
  //   console.log("Formatted Start Time:", time.formattedStartTime);
  //   console.log("Formatted End Time:", time.formattedEndTime);
  // });

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={splitDialogToggle}
      PaperProps={{
        sx: {
          overflow: "hidden"
        }
      }}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Split time
      </BootstrapDialogTitle>

      <div
        style={{
          width: "543px",
          height: "170px",
          border: "1px solid #ccd5e5",
          margin: "20px auto",
          padding: "30px",
          display: "grid",
          gridTemplateRows: "50% 50%",
          rowGap: "20px",
          borderRadius: "3px"
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            <Typography variant="h6" gutterBottom sx={{ fontSize: "11px", fontWeight: "600", color: "#79899d" }}>
              MEMBER
            </Typography>

            <ListItem sx={{ padding: "0 !important" }}>
              <ListItemAvatar>
                <Avatar src="https:nativuspeople.com/wp-content/uploads/2023/02/Zain-Imam.jpg" sx={{ width: "12", height: "12" }} />
              </ListItemAvatar>
              <ListItemText primary="Zain Malik" />
            </ListItem>
          </div>
          <div>
            <Typography variant="h6" gutterBottom sx={{ fontSize: "11px", fontWeight: "600", color: "#79899d" }}>
              PROJECT
            </Typography>
            <ListItem sx={{ padding: "0 !important" }}>
              <React.Fragment>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#7b0e09", fontSize: "16px", fontWeight: "bold" }}>T</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography noWrap sx={{ fontSize: "14px" }}>
                      Time Tracker
                    </Typography>
                  }
                />
              </React.Fragment>
            </ListItem>
          </div>
        </div>

        <div>
          <Typography variant="h6" gutterBottom sx={{ fontSize: "11px", fontWeight: "600", color: "#79899d" }}>
            TIME SPAN
          </Typography>
          <div>Fri, Jun 16, 2023 from 9:05:53 am to 12:00 pm</div>
        </div>
      </div>

      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{
            backgroundColor: "#E9EDEF",
            borderRadius: "30px",
            width: "42%",
            // height: "20px !important",
            margin: "0 auto"
            // boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, 0.13)",
            // "& .MuiButtonBase-root:focus": {
            //   zIndex: 1,
            //   color: " #fff !important",
            //   fontWeight: "600 !important",
            //   transition: "z-index 0.2s, color 0.5s, font-weight 0.2s !important"
            // }
          }}
        >
          <Tab label="Reassign time" disableRipple />
          <Tab label="Delete time" disableRipple />
        </Tabs>
      </Box>

      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MultiInputTimeRangeField
            slotProps={{
              textField: ({ position }) => ({
                label: position === "start" ? "From" : "To"
              })
            }}
            sx={{ width: "350px", mt: 3, mb: 6, ml: 2 }}
          />
        </LocalizationProvider>
        <TimeBar setActivityTotal={setActivityTotal} />
        {value === 1 && (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 540, mt: 3 }}
            renderInput={params => <TextField {...params} label="PROJECT" size="small" placeholder="Projects" required maxRows="2" />}
          />
        )}
        <TextField
          id="filled-multiline-static"
          label="Reason"
          multiline
          rows={4}
          placeholder="Why are you splitting this time entry? (ex: Forgot to start timer)"
          variant="outlined"
          required
          sx={{ mt: 4, mb: 2, width: 540 }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            minWidth: "84px",
            height: "40px",
            fontSize: "12px",
            fontWeight: "500",
            border: "1px solid #e4e9ef",
            padding: "9px 20px",
            color: "#3e4956",
            borderRadius: "6px"
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            background: "#2aa7ff",
            minWidth: "84px",
            height: "40px",
            fontSize: "12px",
            fontWeight: "500",

            padding: "9px 20px",
            borderRadius: "6px"
          }}
          variant={"contained"}
        >
          Save
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

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
