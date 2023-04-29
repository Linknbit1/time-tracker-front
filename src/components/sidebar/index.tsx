import React, { useState } from "react";
import { ReactComponent as HubStaffSvg } from "../../assets/svg/hubstaffLogo.svg";
import styles from "./style.module.scss";
import nav from "../nav";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
// import classNames from "classnames";
interface HeaderProps {
  // existing props
  className?: string;
}

const SideBar = ({ className }: HeaderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(-1);
  console.log(currentPage);
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
                to={item.children ? "#" : item.url}
                onClick={() => {
                  handleClick(id);
                }}
              >
                {item.icon}
                {item.text}
              </Button>

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