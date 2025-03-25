import React from "react";
import { DatePicker, Space } from "antd";

const DateInput = ({ icon, inputLabel }) => {
  const { RangePicker } = DatePicker;
  return (
    <div dir="ltr" className="flex flex-col space-y-1 px-4">
         <div dir="rtl" className="text-xs sm:text-sm flex items-center gap-2 ">
        {icon}
        {inputLabel}
      </div>
      <DatePicker suffixIcon={''}  />
      {/* <RangePicker allowClear={false} suffixIcon={''} placeholder={['زمان شروع', 'زمان پایان']} style={{fontFamily:'yekan'}} /> */}
    </div>
  );
};

export default DateInput;