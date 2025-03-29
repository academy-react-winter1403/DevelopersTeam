import React, { useEffect, useState } from "react";
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
import CourseType from "./courseType/courseType";
import CourseLevel from "./courseLevel/courseLevel";
import CourseStatus from "./courseStatus/courseStatus";
import TeacherName from "./teacherName/teacherName";
import CourseTech from "./courseTech/courseTech";
import { useQuery } from "@tanstack/react-query";
import http from "../../../core/services/interceptor";

const FilterSection = ({ setSearchQuery ,setSelectedType,setSelectedLevel}) => {

  return (
    <div className="w-full 2xl:w-[337px] h-[550px] bg-lightGray rounded-3xl pt-4 space-y-4">
      <FilterSearchInput
        icon={<FiSearch className="text-2xl" />}
        inputLabel={"جست‌جو دوره"}
        placeholder={"جست جو کنید ..."}
        setSearchQuery={setSearchQuery}
      />

      <CourseType setSelectedType={setSelectedType} />
      <CourseLevel setSelectedLevel={setSelectedLevel} />
      {/* <CourseStatus /> */}
      <TeacherName />
      <CourseTech />

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
