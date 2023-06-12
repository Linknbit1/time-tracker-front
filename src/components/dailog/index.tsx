import CloseIcon from "@mui/icons-material/Close";
import {
  Autocomplete,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import * as React from "react";

import TimeBar from "../timeBar";

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

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

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

interface props {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  setActivityTotal: (newTotal: string) => void;
}

export default function CustomizedDialogs({ toggle, setToggle, setActivityTotal }: props) {
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  // const handleClickOpen = () => {
  //   setToggle(true);
  // };
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={toggle}
        PaperProps={{
          sx: {
            overflow: "hidden"
          }
        }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit time
        </BootstrapDialogTitle>
        <DialogContent>
          <ListItem sx={{ p: 0, mb: 3, mt: 3 }}>
            <ListItemAvatar>
              <Avatar src="https:nativuspeople.com/wp-content/uploads/2023/02/Zain-Imam.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography noWrap sx={{ fontSize: "14px" }}>
                  Zain Malik
                </Typography>
              }
            />
          </ListItem>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 540 }}
            renderInput={params => <TextField {...params} label="PROJECT" size="medium" placeholder="Projects" required maxRows="2" />}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{ mt: 2, mb: 4 }}>
              <DatePicker label="TIME SPAN (PKT)*" />
            </DemoContainer>
          </LocalizationProvider>
          <TimeBar setActivityTotal={setActivityTotal} />

          <FormControl sx={{ minWidth: 540, mt: 5, mb: 5 }} required variant="outlined" hiddenLabel>
            <InputLabel
              id="demo-controlled-open-select-label"
              variant="outlined"
              // sx={{
              //   border: "2px solid red",
              //   mr: "20px",
              //   "& .MuiInputLabel-root": {
              //     border: "2px solid red",
              //     fontSize: "20px"
              //   }
              // }}
            >
              REASON
            </InputLabel>
            <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" label="Reason">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
    </div>
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
