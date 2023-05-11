import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as TogglerSvg } from "../../assets/svg/toggler.svg";
import useStore from "../../store";
import nav from "../nav";

import styles from "./style.module.scss";

const SideBar = () => {
  const [currentPage, setCurrentPage] = useState<number>(-1);
  const [menu, setMenu] = useState(false);
  const { setSidebarStatus, sidebarStatus } = useStore();

  function toggleSidebar() {
    setSidebarStatus(!sidebarStatus);
  }

  function handleClick(index: number) {
    setCurrentPage(index === currentPage ? -1 : index);
  }

  useEffect(() => {
    if (sidebarStatus) {
      setMenu(true);
    } else {
      setTimeout(() => {
        setMenu(false);
      }, 200);
    }
  }, [sidebarStatus]);

  return (
    <aside className={classNames(styles.sidebar, { [styles["sidebar--minimized"]]: !sidebarStatus, [styles["sidebar--menu-open"]]: !menu })}>
      <div className={styles.sidebar__content}>
        <a className={styles.sidebar__logoLink}>
          <img
            src="https://f.hubspotusercontent30.net/hub/8683234/hubfs/hubstaff-logo%20copy.png?width=108&height=108"
            alt="hello"
            height={30}
            width={32}
          />
          <span className={styles["sidebar__logo-text"]}>Hubstaff</span>
        </a>

        <div
          className={classNames(styles.sidebar__toggler, { [styles["sidebar__toggler--open"]]: !sidebarStatus })}
          onClick={() => {
            toggleSidebar();
          }}
        >
          <TogglerSvg />
        </div>
        <div className={styles.sidebar__nav}>
          {nav.map((item, id) => {
            return (
              <div key={id} className={styles.sidebar__items}>
                <div className={styles.sidebar__item}>
                  <NavLink className={styles.sidebar__btn} to={item.children ? item.children[0].url : item.url || ""}>
                    <span
                      className={styles.sidebar__icon}
                      onClick={() => {
                        !sidebarStatus ? handleClick(id) : undefined;
                      }}
                    >
                      {item.icon}
                    </span>
                    <span className={styles.sidebar__link}>{item.text}</span>
                  </NavLink>
                  {item.children && (
                    <button
                      className={classNames(styles.sidebar__arrow, currentPage === id ? styles.active : "")}
                      onClick={() => {
                        handleClick(id);
                      }}
                    ></button>
                  )}
                </div>
                {item.children && (
                  <div
                    className={classNames(styles.sidebar__list, currentPage === id ? styles["sidebar__list--open"] : "")}
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
      </div>
    </aside>
  );
};

export default SideBar;
