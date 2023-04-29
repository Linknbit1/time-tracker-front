import React from "react";
import styles from "./style.module.scss";

const Content = ({ children }: { children: React.ReactElement<HTMLDivElement> }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
