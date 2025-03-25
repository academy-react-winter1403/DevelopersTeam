import React from "react";
import { DatePicker, Space } from "antd";

const DateInput = ({ icon, inputLabel }) => {
  const { RangePicker } = DatePicker;
  return (
    <div className="flex flex-col space-y-1 px-4">
         <div className="text-xs sm:text-sm lg:text-base flex items-center gap-2 ">
        {icon}
        {inputLabel}
      </div>
      <DatePicker suffixIcon={''} />
      {/* <RangePicker allowClear={false} suffixIcon={''} placeholder={['زمان شروع', 'زمان پایان']} style={{fontFamily:'yekan'}} /> */}
    </div>
  );
};

export default DateInput;
