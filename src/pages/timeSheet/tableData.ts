import React from "react";

type Option = {
  label: string;
  value: string;
}
type MyRowType = {
  project: string;
  Activity: string;
  Idle: string;
  Manual: string;
  Duration: string;
  Time: string;
  Actions?: string;
  selectedOption?: Option;
};

export const columns = [
  {
    name: "Project",
    span: "9.90%",
    selector: (row: MyRowType) => row.project
  },
  {
    name: "Activity",
    span: "10.89%",
    selector: (row: MyRowType) => row.Activity
  },
  {
    name: "Idle",
    span: "10.82%",
    selector: (row: MyRowType) => row.Idle
  },
  {
    name: "Manual",
    span: "10.82%",
    selector: (row: MyRowType) => row.Manual
  },
  {
    name: "Duration",
    span: "11.13%",
    selector: (row: MyRowType) => row.Duration
  },
  {
    name: "Time",
    span: "11.13%",
    selector: (row: MyRowType) => row.Time
  },
  {
    name: "Actions",
    span: "11.13%",
    selector: (row: MyRowType) => row.selectedOption,
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]
  }
];

export const detail = [
  {
    project: "gym-app",
    Activity: "60%",
    Idle: "25%",
    Manual: "15%",
    Duration: "1:35:18",
    Time: "9:26 am - 11:02 am",
    Actions: "2023-05-12 09:00:00"
  },
  {
    project: "tailor-app",
    Activity: "70%",
    Idle: "20%",
    Manual: "10%",
    Duration: "0:08:10",
    Time: "2:00 pm - 2:08 pm",
    Actions: "2023-05-12 14:00:00"
  },
  {
    project: "grocery-app",
    Activity: "50%",
    Idle: "30%",
    Manual: "20%",
    Duration: "2:15:46",
    Time: "11:30 am - 1:45 pm",
    Actions: "2023-05-12 11:30:00"
  },
  {
    project: "restaurant-app",
    Activity: "80%",
    Idle: "15%",
    Manual: "5%",
    Duration: "0:52:22",
    Time: "7:00 pm - 7:53 pm",
    Actions: "2023-05-12 19:00:00"
  },
  {
    project: "travel-app",
    Activity: "45%",
    Idle: "35%",
    Manual: "20%",
    Duration: "3:20:10",
    Time: "10:45 am - 2:05 pm",
    Actions: "2023-05-12 10:45:00"
  },
  {
    project: "movie-app",
    Activity: "65%",
    Idle: "25%",
    Manual: "10%",
    Duration: "1:05:30",
    Time: "6:30 pm - 7:35 pm",
    Actions: "2023-05-12 18:30:00"
  },
  {
    project: "music-app",
    Activity: "90%",
    Idle: "5%",
    Manual: "5%",
    Duration: "2:10:45",
    Time: "3:15 pm - 5:25 pm",
    Actions: "2023-05-12 15:15:00"
  },
  {
    project: "car-rental-app",
    Activity: "55%",
    Idle: "30%",
    Manual: "15%",
    Duration: "4:45:56",
    Time: "9:00 am - 1:45 pm",
    Actions: "2023-05-12 09:00:00"
  },
  {
    project: "book-app",
    Activity: "75%",
    Idle: "20%",
    Manual: "5%",
    Duration: "0:45:12",
    Time: "8:15 pm - 9:00 pm",
    Actions: "2023-05-12 20:15:00"
  },
  {
    project: "sports-app",
    Activity: "40%",
    Idle: "40%",
    Manual: "20%",
    Duration: "2:30:30",
    Time: "12:00 pm - 2:30 pm",
    Actions: "2023-05-12 12:00:00"
  }
];
