type TimeSlots = {
  startTime: number;
  endTime: number;
  color: string;
};

const timeSlots: TimeSlots[] = [
  { startTime: new Date().setHours(9, 0, 0, 0), endTime: new Date().setHours(10, 0, 0, 0), color: "#216974" },
  { startTime: new Date().setHours(10, 30, 0, 0), endTime: new Date().setHours(10, 50, 0, 0), color: "#d1711f" },
  { startTime: new Date().setHours(11, 30, 0, 0), endTime: new Date().setHours(12, 30, 0, 0), color: "#478ba2" },
  { startTime: new Date().setHours(13, 0, 0, 0), endTime: new Date().setHours(14, 0, 0, 0), color: "#44426e" },
  { startTime: new Date().setHours(14, 22, 0, 0), endTime: new Date().setHours(15, 30, 0, 0), color: "#7b0e09" }
];

export default timeSlots;
