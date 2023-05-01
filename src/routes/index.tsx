import React from "react";

import Layout from "../components/layout";
import * as paths from "../constants/routes";
import AllReports from "../pages/allReports";
import AmountOwned from "../pages/amountOwned";
import Apps from "../pages/apps";
import Login from "../pages/auth/login";
import DailyTotal from "../pages/dailyTotal";
import Dashboard from "../pages/dashboard";
import Expenses from "../pages/expenses";
import Insights from "../pages/insights";
import Payments from "../pages/payments";
import Projects from "../pages/projects";
import ScreenShots from "../pages/screenShots";
import Teams from "../pages/teams";
import TimeAndActivity from "../pages/time&Activity";
import TimeSheet from "../pages/timeSheet";
import Todo from "../pages/todo";
import Url from "../pages/url";

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
