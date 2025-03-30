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
import { Button } from "antd";
import { RxCross2 } from "react-icons/rx";

const FilterSection = ({
  setSearchQuery,
  setSelectedType,
  setSelectedLevel,
  setSelectedTeacher,
  setSelectedTech,
  selectedPriceMin,
  setSelectedPriceMin,
  selectedPriceMax,
  setSelectedPriceMax,
}) => {
  const handleReset = () => {
    setSearchQuery("");
    setSelectedType("");
    setSelectedLevel("");
    setSelectedTeacher("");
    setSelectedTech("");
    setSelectedPriceMin(100);
    setSelectedPriceMax(50000000);
  };

  return (
    <div className="w-full 2xl:w-[337px] h-[650px] bg-lightGray rounded-3xl pt-4 space-y-4">
      <FilterSearchInput
        icon={<FiSearch className="text-2xl" />}
        inputLabel={"جست‌جو دوره"}
        placeholder={"جست جو کنید ..."}
        setSearchQuery={setSearchQuery}
      />
      <CourseType setSelectedType={setSelectedType} />
      <CourseLevel setSelectedLevel={setSelectedLevel} />
      {/* <CourseStatus /> */}
      <TeacherName setSelectedTeacher={setSelectedTeacher} />
      <CourseTech setSelectedTech={setSelectedTech} />
      <PriceSlider
        selectedPriceMin={selectedPriceMin}
        setSelectedPriceMin={setSelectedPriceMin}
        selectedPriceMax={selectedPriceMax}
        setSelectedPriceMax={setSelectedPriceMax}
      />
      <DateInput
        icon={<IoCalendarOutline className="text-2xl" />}
        inputLabel={"تاریخ برگزاری"}
      />
      <Button
        shape="round"
        icon={<RxCross2 className="text-lg" />}
        style={{ fontFamily: "yekan", marginRight: "17px" }}
        danger
        onClick={handleReset}
      >
        حذف
      </Button>
    </div>
  );
};

export default FilterSection;
