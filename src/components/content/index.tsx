// import classNames from "classnames";
import React from "react";

import styles from "./style.module.scss";

interface ContentProps {
  type?: number;
  children: React.ReactElement<HTMLDivElement>;
}

const Content = ({ children }: ContentProps) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
