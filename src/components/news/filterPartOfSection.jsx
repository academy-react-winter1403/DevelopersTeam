import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrShareOption } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import FilterInput from "./../../components/courses/filterInput";
import SelectDropdown from "./../../components/courses/selectDropdown";
import DateInput from "./../../components/courses/dateInput";

const FilterPartOfNews = () => {
  return (
    <div className="w-full h-[500px] bg-lightGray rounded-3xl pt-4 space-y-4">
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
        inputLabel={"تاریخ برگزاری"}
      />
    </div>
  );
};

export default FilterPartOfNews;
