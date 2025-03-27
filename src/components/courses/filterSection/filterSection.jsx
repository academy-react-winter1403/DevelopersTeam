import React from "react";
import { FiSearch } from "react-icons/fi";
import SelectDropdown from "../selectDropdown/selectDropdown";
import { GrShareOption } from "react-icons/gr";
import { IoLayersOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import PriceSlider from "../priceSlider/priceSlider";
import { PiMoneyWavyLight } from "react-icons/pi";
import DateInput from "../dateInput/dateInput";
import { IoCalendarOutline } from "react-icons/io5";
import FilterSearchInput from "../filterSearchInput/filterSearchInput";

const FilterSection = ({ setSearchQuery }) => {
  return (
    <div className="w-full 2xl:w-[337px] h-[500px] bg-lightGray rounded-3xl pt-4 space-y-4">
      <FilterSearchInput
        icon={<FiSearch className="text-2xl" />}
        inputLabel={"جست‌جو دوره"}
        placeholder={"جست جو کنید ..."}
        setSearchQuery={setSearchQuery}
      />
      <SelectDropdown
        icon={<GrShareOption className="text-2xl" />}
        inputLabel={"دسته‌بندی"}
        placeholder="انتخاب کنید"
      />
      <SelectDropdown
        icon={<IoLayersOutline className="text-2xl" />}
        inputLabel={"سطح آموزشی"}
        placeholder="انتخاب کنید"
      />
      <SelectDropdown
        icon={<LiaChalkboardTeacherSolid className="text-2xl" />}
        inputLabel={"اساتید"}
        name={name}
        placeholder="انتخاب کنید"
      />
      <PriceSlider
        icon={<PiMoneyWavyLight className="text-2xl" />}
        inputLabel={"قیمت"}
      />
      <DateInput
        icon={<IoCalendarOutline className="text-2xl" />}
        inputLabel={"تاریخ برگزاری"}
      />
    </div>
  );
};

export default FilterSection;
