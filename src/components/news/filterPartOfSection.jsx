import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrShareOption } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import SelectDropdown from "../courses/selectDropdown/selectDropdown";
import DateInput from "../courses/dateInput/dateInput";
import FilterInput from "../courses/filterInput/filterInput";


const FilterPartOfNews = () => {
  return (
    <div className="w-full h-[250px] bg-lightGray rounded-3xl pt-4 space-y-4">
      <FilterInput
        icon={<FiSearch className="text-2xl" />}
        inputLabel={"جست‌جو دوره"}
        name={name}
        placeholder={"جست جو کنید ..."}
      />
      <SelectDropdown
        icon={<GrShareOption className="text-2xl" />}
        inputLabel={"دسته‌بندی"}
        name={name}
        placeholder="انتخاب کنید"
      />
       <DateInput
        icon={<IoCalendarOutline className="text-2xl" />}
        inputLabel={"تاریخ انتشار"}
      />
    </div>
  );
};

export default FilterPartOfNews;
