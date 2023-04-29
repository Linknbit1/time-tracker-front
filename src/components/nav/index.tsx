import React from "react";
import { ReactComponent as DashboardSvg } from "../../assets/svg/dashboard.svg";

import { ReactComponent as TimeSheetSvg } from "../../assets/svg/timeSheet.svg";
import { ReactComponent as ActivitySvg } from "../../assets/svg/activity.svg";
import { ReactComponent as InsightSvg } from "../../assets/svg/insights.svg";
import { ReactComponent as ProjectManagementSvg } from "../../assets/svg/pManagement.svg";
import { ReactComponent as ReportsSvg } from "../../assets/svg/reports.svg";
import { ReactComponent as TeamsSvg } from "../../assets/svg/teams.svg";
import { ReactComponent as ExpensesSvg } from "../../assets/svg/expenses.svg";
import {
  allReportsPath,
  amountOwedPath,
  appsPath,
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
  todoPath,
  urlPath
} from "../../routes/paths";

const nav = [
  { id: 0, url: dashboardPath, text: "Dashboard", icon: <DashboardSvg /> },
  { id: 1, url: timeSheetsPath, text: "Time Sheets", icon: <TimeSheetSvg /> },
  {
    id: 2,
    text: "Activity",
    icon: <ActivitySvg />,
    children: [
      {
        url: appsPath,
        text: "Apps",
        icon: "icon"
      },
      { url: screenShotsPath, text: "Screen Shots", icon: "icon" },
      { url: urlPath, text: "URLs", icon: "icon" }
    ]
  },
  { id: 3, url: insightsPath, text: "Insights", icon: <InsightSvg /> },
  {
    id: 4,
    text: "Project Management",
    icon: <ProjectManagementSvg />,
    children: [
      { id: 10, url: projectPath, text: "Project", icon: "icon" },
      { id: 11, url: todoPath, text: "Todo", icon: "icon" }
    ]
  },
  {
    id: 5,
    text: "Reports",
    icon: <ReportsSvg />,
    children: [
      { id: 10, url: dailyTotalPath, text: "Daily Total", icon: "icon" },
      { id: 12, url: timeAndActivityPath, text: "Time & Activity", icon: "icon" },
      { id: 13, url: amountOwedPath, text: "Amount Owned", icon: "icon" },
      { id: 14, url: paymentsPath, text: "Payments", icon: "icon" },
      { id: 15, url: allReportsPath, text: "All Reports", icon: "icon" }
    ]
  },
  { id: 6, url: teamsPath, text: "Teams", icon: <TeamsSvg /> },
  { id: 7, url: expensesPath, text: "Expenses", icon: <ExpensesSvg /> }
];
export default nav;
