// import React from "react";

// type MyRowType = {
//   project: string;
//   Activity: string;
//   Idle: string;
//   Manual: string;
//   Duration: string;
//   Time: string;
//   selectedOption: string;
// };
// interface Column {
//   name: string;
//   span: string;
//   selector: (row: MyRowType) => any;
//   options?: Option[];
// }

// interface Option {
//   label: string;
//   value: string;
// }

// export const columns: Column[] = [
//   {
//     name: "Project",
//     span: "9.90%",
//     selector: (row: MyRowType) => row.project
//   },
//   {
//     name: "Activity",
//     span: "10.89%",
//     selector: (row: MyRowType) => row.Activity
//   },
//   {
//     name: "Idle",
//     span: "10.82%",
//     selector: (row: MyRowType) => row.Idle
//   },
//   {
//     name: "Manual",
//     span: "10.82%",
//     selector: (row: MyRowType) => row.Manual
//   },
//   {
//     name: "Duration",
//     span: "11.13%",
//     selector: (row: MyRowType) => row.Duration
//   },
//   {
//     name: "Time",
//     span: "11.13%",
//     selector: (row: MyRowType) => row.Time
//   },
//   {
//     name: "Actions",
//     span: "11.13%",
//     selector: (row: MyRowType) => row.selectedOption,
//     options: [
//       { label: "Edit time entry", value: "1" },
//       { label: "Split time entry", value: "2" },
//       { label: "Delete time entry", value: "3" }
//     ]
//   }
// ];

export const detail = [
  {
    id: 1,
    project: "gym-app",
    activity: "60%",
    idle: "25%",
    manual: "15%",
    duration: "1:35:18",
    time: "9:26 am - 11:02 am",
    actions: "2023-05-12 09:00:00"
  },
  {
    id: 2,
    project: "tailor-app",
    activity: "70%",
    idle: "20%",
    manual: "10%",
    duration: "0:08:10",
    time: "2:00 pm - 2:08 pm",
    actions: "2023-05-12 14:00:00"
  },
  {
    id: 3,
    project: "grocery-app",
    activity: "50%",
    idle: "30%",
    manual: "20%",
    duration: "2:15:46",
    time: "11:30 am - 1:45 pm",
    actions: "2023-05-12 11:30:00"
  },
  {
    id: 4,
    project: "restaurant-app",
    activity: "80%",
    idle: "15%",
    manual: "5%",
    duration: "0:52:22",
    time: "7:00 pm - 7:53 pm",
    actions: "2023-05-12 19:00:00"
  },
  {
    id: 5,
    project: "travel-app",
    activity: "45%",
    idle: "35%",
    manual: "20%",
    duration: "3:20:10",
    time: "10:45 am - 2:05 pm",
    actions: "2023-05-12 10:45:00"
  },
  {
    id: 6,
    project: "movie-app",
    activity: "65%",
    idle: "25%",
    manual: "10%",
    duration: "1:05:30",
    time: "6:30 pm - 7:35 pm",
    actions: "2023-05-12 18:30:00"
  },
  {
    id: 7,
    project: "music-app",
    activity: "90%",
    idle: "5%",
    manual: "5%",
    duration: "2:10:45",
    time: "3:15 pm - 5:25 pm",
    actions: "2023-05-12 15:15:00"
  },
  {
    id: 8,
    project: "car-rental-app",
    activity: "55%",
    idle: "30%",
    manual: "15%",
    duration: "4:45:56",
    time: "9:00 am - 1:45 pm",
    actions: "2023-05-12 09:00:00"
  },
  {
    id: 9,
    project: "book-app",
    activity: "75%",
    idle: "20%",
    manual: "5%",
    duration: "0:45:12",
    time: "8:15 pm - 9:00 pm",
    actions: "2023-05-12 20:15:00"
  },
  {
    id: 10,
    project: "sports-app",
    activity: "40%",
    idle: "40%",
    manual: "20%",
    duration: "2:30:30",
    time: "12:00 pm - 2:30 pm",
    actions: "2023-05-12 12:00:00"
  }
];
