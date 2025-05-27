import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const SchedualBottom = ({ handleSearch }) => {
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
            <h2>جستجو اسکژول</h2>
          </div>
          <div className="flex justify-between items-center relative mt-2">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="جستجو کنید..."
              className="h-9 w-full  dark:placeholder:text-gray dark:bg-gray-800 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-0 bg-lightGray focus:border-navyBlue transition-all duration-300"
            />
            <div className="w-[42px] h-[42px] bg-navyBlue absolute left-0 rounded-xl flex items-center justify-center">
              <CiSearch className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SchedualBottom;
