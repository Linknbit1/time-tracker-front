import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as AccountSvg } from "../../assets/svg/account.svg";
import { ReactComponent as DownloadSvg } from "../../assets/svg/download.svg";
import { ReactComponent as SignOutSvg } from "../../assets/svg/signOut.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { loginPath, myAccountPath } from "../../routes/paths";

import styles from "./style.module.scss";

interface DropDownMenuProps {
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMenu = ({ setIsDropDownOpen }: DropDownMenuProps) => {
  const navigate = useNavigate();

  function signOut() {
    navigate(loginPath);
  }

  const dropDownMenu = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropDownMenu, () => setIsDropDownOpen(false));

  return (
    <div className={styles.dropDownMenu} ref={dropDownMenu}>
      <Link className={styles.dropDownMenu__link} to={myAccountPath}>
        <AccountSvg />
        <span>My account</span>
      </Link>
      <Link className={styles.dropDownMenu__link} to={"https://app.hubstaff.com/download"}>
        <DownloadSvg />
        <span>Download</span>
      </Link>
      <button className={styles.dropDownMenu__link} onClick={signOut}>
        <SignOutSvg />
        <span>Sign out</span>
      </button>
    </div>
  );
};

export default DropDownMenu;
