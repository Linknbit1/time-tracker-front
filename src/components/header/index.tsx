import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/system";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as DownloadSvg } from "../../assets/svg/download.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ColorModeContext } from "../../themes";
import DropDownMenu from "../dropDownMenu";

import styles from "./style.module.scss";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const dropDownMenu = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropDownMenu, () => setIsDropDownOpen(false));

  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const colormode = useContext(ColorModeContext);

  return (
    <header className={styles.topBar}>
      <IconButton onClick={colormode.toggleColorMode}>
        {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </IconButton>
      <span className={styles.topBar__download}>
        <NavLink className={styles.topBar__btn} to={"https://app.hubstaff.com/download"}>
          {<DownloadSvg />}
          Download
        </NavLink>
      </span>
      <div className={styles.topBar__images}>
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
      </div>
    </header>
  );
};

export default Header;
