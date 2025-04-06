import React from "react";
import { BsClock } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

const HeaderDashboard = () => {
  return (
    <div className="w-full h-24 flex flex-col md:flex-row md:items-center">
      <div className="sm:w-1/2 mt-3">
        <h1 className="font-bold text-xl sm:text-3xl whitespace-nowrap">سلام، صبح‌ بخیر پارسا😍</h1>
      </div>
      <div className="sm:w-1/2 flex space-x-5 sm:space-x-10 mt-3">
        <div className="flex space-x-3 items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex justify-center items-center">
            <BsClock className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-sm text-gray">ساعت</h1>
            <h1 className="font-semibold whitespace-nowrap">09:21</h1>
          </div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex justify-center items-center">
            <IoCalendarOutline className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-sm text-gray">تاریخ</h1>
            <h1 className="font-semibold whitespace-nowrap">20 اردیبهشت 1403</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
