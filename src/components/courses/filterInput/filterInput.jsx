import { Input } from "antd";
import React from "react";

const FilterInput = ({ icon, inputLabel, name, placeholder }) => {
  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        {icon}
        {inputLabel}
      </div>
      <Input
      style={{fontFamily:'yekan',borderRadius:'6px'}}
        name={name}
        className="w-full h-8 outline-none rounded-xl p-5 pr-3 placeholder:text-xs border border-lightGray bg-inputBg focus:border-navyBlue transition-all duration-300"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FilterInput;
