import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.topBar}>
      <span className={styles.topBar__download}>
        <NavLink className={styles.topBar__btn} to={"https://app.hubstaff.com/download"}>
          Download
        </NavLink>
      </span>
      <div className={styles.topBar__profile}>
        <div>
          <img src="https://hubstaff-account.s3.amazonaws.com/avatars/97d27ee4e05f99fb857ddb8644a81289.jpg" />
        </div>
        <div>
          <img src="https://hubstaff-production.s3.amazonaws.com/organization/logos/57ec6bd7791a33a356f009fb37d08320.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
