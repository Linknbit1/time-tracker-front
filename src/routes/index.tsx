import React from "react";
// import Login from "../pages/auth/login";
// import Home from "../pages/home";
import Login from "../pages/auth/login";
// import Dashboard from "../pages/dashboard";
import * as paths from "../constants/routes";
import TimeSheet from "../pages/timeSheet";
import Apps from "../pages/apps";
import ScreenShots from "../pages/screenShots";
import Url from "../pages/url";
import Insights from "../pages/insights";
import Projects from "../pages/projects";
import Todo from "../pages/todo";
import DailyTotal from "../pages/dailyTotal";
import TimeAndActivity from "../pages/time&Activity";
import AmountOwned from "../pages/amountOwned";
import Payments from "../pages/payments";
import AllReports from "../pages/allReports";
import Teams from "../pages/teams";
import Expenses from "../pages/expenses";
import Dashboard from "../pages/dashboard";
import Layout from "../components/layout";

interface RouterOptions {
  element: JSX.Element;
}

interface RouteWithIndex extends RouterOptions {
  index: true;
}

interface RouteWithPath extends RouterOptions {
  path: string;
}
interface RouteWithChildren extends RouterOptions {
  children: Route[];
}

type Route = RouteWithIndex | RouteWithPath | RouteWithChildren;

const routes: Route[] = [
  {
    path: paths.loginPath,
    element: <Login />
  },

  {
    path: paths.dashboardPath,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: paths.timeSheetsPath,
        element: <TimeSheet />
      },
      {
        path: paths.appsPath,
        element: <Apps />
      },
      {
        path: paths.screenShotsPath,
        element: <ScreenShots />
      },
      {
        path: paths.urlPath,
        element: <Url />
      },
      {
        path: paths.insightsPath,
        element: <Insights />
      },
      {
        path: paths.projectPath,
        element: <Projects />
      },
      {
        path: paths.todoPath,
        element: <Todo />
      },
      {
        path: paths.dailyTotalPath,
        element: <DailyTotal />
      },
      {
        path: paths.timeAndActivityPath,
        element: <TimeAndActivity />
      },
      {
        path: paths.amountOwedPath,
        element: <AmountOwned />
      },
      {
        path: paths.paymentsPath,
        element: <Payments />
      },
      {
        path: paths.allReportsPath,
        element: <AllReports />
      },
      {
        path: paths.teamsPath,
        element: <Teams />
      },
      {
        path: paths.expensesPath,
        element: <Expenses />
      }
    ]
  }
];

export default routes;
