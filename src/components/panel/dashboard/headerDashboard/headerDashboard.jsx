import React from "react";
import { BsClock } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import RealTimeClock from "./realTimeClock/realTimeClock";

const HeaderDashboard = ({ userData }) => {
  return (
    <div className="w-full h-24 flex flex-col md:flex-row md:items-center">
      <div className="sm:w-1/2 mt-3">
        <h1 className="font-bold text-xl sm:text-3xl whitespace-nowrap">
          {" "}
          سلام، صبح‌ بخیر {userData?.fName} 😍
        </h1>
      </div>
      <RealTimeClock />
    </div>
  );
};

export default HeaderDashboard;
