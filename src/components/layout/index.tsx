import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import SideBar from "../sidebar";
import styles from "./style.module.scss";
import Content from "../content";

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
