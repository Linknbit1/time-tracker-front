import { CssBaseline, ThemeProvider } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Outlet } from "react-router-dom";

import useStore from "../../store";
import { ColorModeContext, useMode } from "../../themes";
import Content from "../content";
import Header from "../header";
import SideBar from "../sidebar";

import styles from "./style.module.scss";

function Layout() {
  const { sidebarStatus } = useStore();
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={classNames(styles.main, { [styles["main--minimized"]]: !sidebarStatus })}>
          <SideBar />
          <Header />
          <Content>
            <Outlet />
          </Content>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Layout;
