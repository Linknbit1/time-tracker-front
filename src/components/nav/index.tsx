import React from "react";

import { ReactComponent as ActivitySvg } from "../../assets/svg/activity.svg";
import { ReactComponent as DashboardSvg } from "../../assets/svg/dashboard.svg";
import { ReactComponent as ExpensesSvg } from "../../assets/svg/expenses.svg";
import { ReactComponent as InsightSvg } from "../../assets/svg/insights.svg";
import { ReactComponent as ProjectManagementSvg } from "../../assets/svg/pManagement.svg";
import { ReactComponent as ReportsSvg } from "../../assets/svg/reports.svg";
import { ReactComponent as TeamsSvg } from "../../assets/svg/teams.svg";
import { ReactComponent as TimeSheetSvg } from "../../assets/svg/timeSheet.svg";
import {
  ActivityUrlPath,
  activityAppsPath,
  activitySSPath,
  allReportsPath,
  amountOwedPath,
  dailyTotalPath,
  dashboardPath,
  expensesPath,
  insightsPath,
  paymentsPath,
  projectPath,
  screenShotsPath,
  teamsPath,
  timeAndActivityPath,
  timeSheetsPath,
  todoPath
} from "../../routes/paths";

interface Button {
  text: string;
  icon?: JSX.Element;
}

interface Link extends Button {
  url: string;
}

interface Accordion extends Button {
  id: number;
  url?: string;
}

interface Nav extends Accordion {
  children?: Link[];
}

const nav: Nav[] = [
  { id: 0, url: dashboardPath, text: "Dashboard", icon: <DashboardSvg /> },
  { id: 1, url: timeSheetsPath, text: "Timesheets", icon: <TimeSheetSvg /> },
  {
    id: 2,
    text: "Activity",
    icon: <ActivitySvg />,
    children: [
      { url: activitySSPath, text: "Screenshots" },
      {
        url: activityAppsPath,
        text: "Apps"
      },
      { url: ActivityUrlPath, text: "URLs" }
    ]
  },
  { id: 3, url: insightsPath, text: "Insights", icon: <InsightSvg /> },
  {
    id: 4,
    text: "Project Management",
    icon: <ProjectManagementSvg />,
    children: [
      { url: projectPath, text: "Project" },
      { url: todoPath, text: "Todo" }
    ]
  },
  {
    id: 5,
    text: "Reports",
    icon: <ReportsSvg />,
    children: [
      { url: dailyTotalPath, text: "Daily Total" },
      { url: timeAndActivityPath, text: "Time & Activity" },
      { url: amountOwedPath, text: "Amount Owned" },
      { url: paymentsPath, text: "Payments" },
      { url: allReportsPath, text: "All Reports" }
    ]
  },
  { id: 6, url: teamsPath, text: "Teams", icon: <TeamsSvg /> },
  { id: 7, url: expensesPath, text: "Expenses", icon: <ExpensesSvg /> }
];
export default nav;
