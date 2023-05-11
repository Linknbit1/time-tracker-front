import React from "react";

import styles from "./style.module.scss";

interface HeadingProps {
  type?: number;
  children: React.ReactElement<HTMLDivElement> | string;
}
const Heading = ({ children }: HeadingProps) => {
  return (
    <div className={styles.heading}>
      <h2>{children}</h2>
    </div>
  );
};

export default Heading;
