import { Input } from "antd";
import React, { useRef } from "react";

const FilterSearchInput = ({
  icon,
  inputLabel,
  placeholder,
  setSearchQuery,
  searchQuery,
}) => {
  // const handleSearch = (e) => {
  //   const query = e.target.value;
  //   setSearchQuery(query);
  // };

  const ref = useRef();

  const handleSearch = (e) => {
    if (ref.current) clearTimeout(ref.current);
    const timeOut = setTimeout(() => {
      const query = e.target.value;
      setSearchQuery(query);
      console.log(query);
    }, 700);
    ref.current = timeOut;
  };

  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        {icon}
        {inputLabel}
      </div>
      <Input
        style={{ fontFamily: "yekan", borderRadius: "6px" }}
        className="w-full h-8 outline-none rounded-xl p-5 pr-3 placeholder:text-xs border border-lightGray bg-inputBg focus:border-navyBlue transition-all duration-300"
        placeholder={placeholder}
        onChange={handleSearch}
        // value={searchQuery}
      />
    </div>
  );
};

export default FilterSearchInput;
