import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import styles from "./style.module.scss";

type Option = {
  label: string;
  value: string;
};
interface TableColumn {
  name: string | any;
  span?: string;
  selector: (row: any) => any;
  cell?: (row: any) => any;
  title?: boolean;
  options?: Option[];
}

interface TableProps {
  columns: TableColumn[];
  data: {
    project: string;
    Activity: string;
    Idle: string;
    Manual: string;
    Duration: string;
    Time: string;
    Actions?: string;
    estimated?: string;
  }[];
  limit?: number;
}

function Table({ columns, data, limit }: TableProps) {
  const row = useRef<HTMLTableRowElement>(null);
  const [height, setHeight] = useState();

  const col = columns.filter((obj, index, self) => index === self.findIndex(o => o.name === obj.name));

  console.log(col);

  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <colgroup>{col.map((column, i) => (column.span ? <col key={i} width={column.span} /> : null))}</colgroup>
        <thead className={styles.table__head}>
          <tr>
            {col.map((column, i) => (
              <th key={i} className={styles.table__th}>
                {column && column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {data.map((val, id) => (
            <tr ref={row as React.LegacyRef<HTMLTableRowElement>} key={id} className={styles.table__tr}>
              {col.map((column, i) => (
                <td
                  //   ref={el => {
                  //     if (el && column.span) {
                  //       const width = (parseFloat(column.span) / 100) * el.parentElement.parentElement.parentElement.offsetWidth;
                  //       el.style.setProperty("--col-width", `${width}px`);
                  //     }
                  //   }}
                  //   rowSpan="1"
                  //   colSpan="1"
                  //   key={i}
                  className={classnames(
                    styles.table__td
                    //  column.cell ? ` ${styles.table__action}` : ""
                  )}
                >
                  <div className={styles.table__cell} title={column.title ? column.selector(val) : ""}>
                    {column.selector(val)}
                    {column.options && (
                      <select className={styles.table__select}>
                        {column.options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
