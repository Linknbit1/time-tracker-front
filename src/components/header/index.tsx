import React from "react";
import styles from "./style.module.scss";

interface HeaderProps {
  // existing props
  className?: string;
}
const Header = () => {
  return <header className={styles.topBar}>header</header>;
};

export default Header;
