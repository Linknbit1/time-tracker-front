import classNames from "classnames";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as DownloadSvg } from "../../assets/svg/download.svg";
import DropDownMenu from "../dropDownMenu";

import styles from "./style.module.scss";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);

  function dropDownToggle() {
    setIsDropDownOpen(prev => !prev);
  }

  return (
    <header className={styles.topBar}>
      <span className={styles.topBar__download}>
        <NavLink className={styles.topBar__btn} to={"https://app.hubstaff.com/download"}>
          {<DownloadSvg />}
          Download
        </NavLink>
      </span>
      <div className={styles.topBar__images}>
        <div className={styles.topBar__profile}>
          <div
            onClick={() => {
              dropDownToggle();
            }}
            ref={divRef}
          >
            <img src="https://hubstaff-account.s3.amazonaws.com/avatars/97d27ee4e05f99fb857ddb8644a81289.jpg" />
          </div>
          <div
            className={classNames(styles.topBar__dropDown, { [styles["topBar__dropDown--open"]]: isDropDownOpen })}
            ref={el => {
              if (el) el.style.setProperty("--menu-height", `${el.scrollHeight / 10}rem`);
            }}
          >
            <DropDownMenu setIsDropDownOpen={setIsDropDownOpen} />
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
