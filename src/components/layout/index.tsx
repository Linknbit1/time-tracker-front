import React from "react";
import { Outlet } from "react-router-dom";

import Content from "../content";
import Header from "../header";
import SideBar from "../sidebar";

import styles from "./style.module.scss";

function Layout() {
  return (
    <main className={styles.main}>
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
