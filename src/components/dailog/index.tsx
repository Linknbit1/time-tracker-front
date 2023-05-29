import CloseIcon from "@mui/icons-material/Close";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";

import ComboBox from "../comboBox";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
    padding: "30px"
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
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
    <DialogTitle sx={{ m: 0, p: 3, fontSize: "18px", fontWeight: "500" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
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
}

export default function CustomizedDialogs({ toggle, setToggle }: props) {
  // const handleClickOpen = () => {
  //   setToggle(true);
  // };
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={toggle}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit time
        </BootstrapDialogTitle>
        <DialogContent
        //  dividers
        >
          <ListItem sx={{ p: 0, mb: 2 }}>
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
          <ComboBox />
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

// import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
// import * as React from "react";

// import ComboBox from "../comboBox";

// interface props {
//   toggle: boolean;
//   setToggle: (value: boolean) => void;
// }

// const FormDialog = ({ toggle, setToggle }: props) => {
//   // const [activityTotal, setActivityTotal] = React.useState<string>("");

//   const handleClose = () => {
//     setToggle(false);
//   };

//   return (
//     <div>
//       <Dialog open={toggle} onClose={handleClose} PaperProps={{ sx: { padding: "30px" } }}>
//         <DialogTitle sx={{}}>Edit time</DialogTitle>
//         <ListItem>
//           <ListItemAvatar>
//             <Avatar
//               sx={{ backgroundColor: "#7b0e09", fontSize: "16px", fontWeight: "bold" }}
//               src="https://nativuspeople.com/wp-content/uploads/2023/02/Zain-Imam.jpg"
//             />
//           </ListItemAvatar>
//           {/* <ListItemText primary="Time Tracker" secondary="LINKNBIT" /> */}
//           <ListItemText
//             primary={
//               <Typography noWrap sx={{ fontSize: "14px" }}>
//                 Zain Malik
//               </Typography>
//             }
//           />
//         </ListItem>
//         <ComboBox />
//         {/* <TimeBar setActivityTotal={setActivityTotal} /> */}

//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We will send updates occasionally.
//           </DialogContentText>
//           <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
//         </DialogContent>
//         <DialogActions>
//           <Button sx={{ backgroundColor: "#fff", border: "1px solid #e4e9ef" }} onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button sx={{ backgroundColor: "#2aa7ff", border: "1px solid #e4e9ef", color: "#fff" }} onClick={handleClose}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default FormDialog;
