import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/system";
import React from "react";
import { useContext } from "react";

import { ColorModeContext } from "../../themes";

import styles from "./style.module.scss";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const colormode = useContext(ColorModeContext);

  return (
    <header className={styles.topBar}>
      <IconButton onClick={colormode.toggleColorMode}>
        {theme.palette.mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
      {/* <div className={styles.topBar__images}>
        <div className={styles.topBar__profile} ref={dropDownMenu}>
          <div onClick={() => setIsDropDownOpen(prev => !prev)}>
            <img src="https://hubstaff-account.s3.amazonaws.com/avatars/97d27ee4e05f99fb857ddb8644a81289.jpg" />
          </div>
          <div className={classNames(styles.topBar__dropDown, { [styles["topBar__dropDown--open"]]: isDropDownOpen })}>
            <DropDownMenu />
          </div>
        </div>
        <div>
          <img src="https://hubstaff-production.s3.amazonaws.com/organization/logos/57ec6bd7791a33a356f009fb37d08320.png" />
        </div>
      </div> */}
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 24, height: 24 }} src="https://hubstaff-account.s3.amazonaws.com/avatars/97d27ee4e05f99fb857ddb8644a81289.jpg" />
          </IconButton>
        </Tooltip>
        <div style={{ border: "1px solid #ddd", height: "25px", margin: "0 8px " }}></div>
        <Avatar
          sx={{ width: 24, height: 24 }}
          src="https://hubstaff-production.s3.amazonaws.com/organization/logos/57ec6bd7791a33a356f009fb37d08320.png"
        />
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
            width: 150,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
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
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Download</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Sign out</MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
