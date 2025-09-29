"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
  
  const date = new Date().toString();
  return <Calendar value={date} />;
};

export default EventCalendar;
