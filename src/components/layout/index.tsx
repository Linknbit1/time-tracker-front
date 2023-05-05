import classNames from "classnames";
import React from "react";
import { Outlet } from "react-router-dom";

import useStore from "../../store";
import Content from "../content";
import Header from "../header";
import SideBar from "../sidebar";

import styles from "./style.module.scss";

function Layout() {
  const { sidebarStatus } = useStore();

  return (
    // <aside className={classNames(styles.main, !sidebarStatus ? ` ${styles["sidebar-minimized"])}>

    <main className={classNames(styles.main, { [styles["main--minimized"]]: !sidebarStatus })}>
      <SideBar />
      {/* <div className={styles.content}> */}
      <Header />
      <Content>
        <Outlet />
      </Content>
      {/* </div> */}
    </main>
  );
}

export default Layout;
