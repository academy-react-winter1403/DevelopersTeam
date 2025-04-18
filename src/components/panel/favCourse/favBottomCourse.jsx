import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import CalenderComp from "./../dashboard/mainDashboard/calender/calender";

const FavBottomCourse = ({ handleSearch }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const openCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  return (
    <div className="hidden sm:block">
      <div className="w-full h-auto mt-5 flex items-center gap-5">
        <div className="">
          <div className="flex items-center gap-2">
            <CiSearch className="w-6 h-6" />
            <h2>جستجو دوره</h2>
          </div>
          <div className="flex justify-between items-center relative mt-2">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="جستجو کنید..."
              className="bg-[#D9D9D9] w-72 text-[#787878] rounded-xl px-6 py-1 outline-none focus:outline-none h-12"
            />
            <div className="w-12 h-12 bg-navyBlue absolute left-0 rounded-xl flex items-center justify-center">
              <CiSearch className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <HiOutlineCalendarDateRange className="w-6 h-6" />
            <h2>تاریخ برگزاری</h2>
          </div>
          <div className="flex justify-between items-center relative mt-2">
            <input
              type="text"
              placeholder="1403/5/20 - 1403/6/20"
              className="bg-[#D9D9D9] text-[#787878] text-sm text-left rounded-xl pr-10 pl-2 py-1 outline-none focus:outline-none h-12 cursor-pointer"
              onClick={openCalendar}
              value={selectedDate}
              readOnly
            />
           
            {isCalendarOpen && (
              <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-xl shadow-md">
                <CalenderComp
                  closeCalendar={closeCalendar}
                  onDateSelect={(date) => setSelectedDate(date)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBottomCourse;
