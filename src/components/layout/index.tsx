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
    <main className={classNames(styles.main, { [styles["main--minimized"]]: !sidebarStatus })}>
      <SideBar />
      <Header />
      <Content>
        <Outlet />
      </Content>
    </main>
  );
}

export default Layout;
