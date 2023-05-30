import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";

import FormDialog from "../dailog";
import IconLabelButtons from "../labelButton";

function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Actions">
          <Typography onClick={handleClick}>
            <IconLabelButtons />
          </Typography>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          // sx={{ fontSize: "12px" }}
          onClick={() => {
            setToggle(prev => !prev);
          }}
        >
          <ListItemIcon sx={{ minWidth: "24px !important" }}>
            <DriveFileRenameOutlineIcon fontSize="small" />
          </ListItemIcon>
          Edit time entry
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: "12px" }}>
          <ListItemIcon sx={{ minWidth: "24px !important" }}>
            <DeleteForeverIcon fontSize="small" />
          </ListItemIcon>
          Delete time entry
        </MenuItem>
      </Menu>

      <FormDialog toggle={toggle} setToggle={setToggle} />
    </React.Fragment>
  );
}

export default DropDownMenu;
