import classNames from "classnames";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HubStaffSvg } from "../../assets/svg/hubstaffLogo.svg";
import nav from "../nav";

import styles from "./style.module.scss";

interface HeaderProps {
  className?: string;
}

const SideBar = ({ className }: HeaderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(-1);

  function handleClick(index: number) {
    setCurrentPage(index === currentPage ? -1 : index);
  }

  return (
    <aside className={classNames(className, styles.sidebar)}>
      <div className={styles.sidebar__content}>
        <a className={styles.sidebar__logoLink}>
          <HubStaffSvg />
        </a>

        {nav.map((item, id) => {
          const currentIndex = currentPage === id;
          const Button = item.children ? "button" : NavLink;

          return (
            <div key={id} className={styles.sidebar__item}>
              <Button
                className={styles.sidebar__btn}
                to={item.children ? "#" : item.url || ""}
                onClick={() => {
                  handleClick(id);
                }}
              >
                {item.icon}
                {item.text}
              </Button>

              <div
                className={classNames(styles.sidebar__list, { [styles.active]: currentIndex && item.children })}
                // Set the height of the menu based on the number of child items
                ref={el => {
                  if (el) el.style.setProperty("--menu-height", `${el.scrollHeight / 10}rem`);
                }}
              >
                {item.children?.map((subitem, i) => (
                  <div key={i} className={styles.sidebar__subItems}>
                    <NavLink className={styles.sidebar__subItem} to={subitem.url}>
                      {subitem.text}
                    </NavLink>
                  </div>
                ))}
              </div>

              {currentIndex && item.children && (
                <div
                  className={styles.sidebar__list}
                  // Set the height of the menu based on the number of child items
                  ref={el => {
                    if (el) el.style.setProperty("--menu-height", `${el.scrollHeight / 10}rem`);
                  }}
                >
                  {item.children.map((subitem, i) => (
                    <div key={i} className={styles.sidebar__subItems}>
                      <NavLink className={styles.sidebar__subItem} to={subitem.url}>
                        {subitem.text}
                      </NavLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
