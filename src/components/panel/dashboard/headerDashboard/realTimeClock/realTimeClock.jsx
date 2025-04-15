import React, { useState, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

import moment from "moment";
import "moment-timezone";
import "moment-jalaali";
import DateComponent from "../../../../common/date/dateComponent";

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tehranTime = moment.tz(currentTime, "Asia/Tehran");
  const persianDate = moment(tehranTime).format("YYYY/MM/DD");
  const formattedTime = tehranTime.format("HH:mm:ss");

  return (
    <div className="sm:w-1/2 flex space-x-5 sm:space-x-10 mt-3">
      <div className="flex space-x-3 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-[#1e2939] flex justify-center items-center">
          <BsClock className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-sm text-gray">ساعت</h1>
          <h1 className="font-semibold whitespace-nowrap">{formattedTime}</h1>
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-[#1e2939] flex justify-center items-center">
          <IoCalendarOutline className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-sm text-gray">تاریخ</h1>
          <h1 className="font-semibold whitespace-nowrap">
            <DateComponent insertDate={persianDate} />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default RealTimeClock;
