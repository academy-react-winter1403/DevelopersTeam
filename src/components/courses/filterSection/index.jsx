import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import PriceSlider from "../priceSlider/priceSlider";
import DateInput from "../dateInput/dateInput";
import { IoCalendarOutline } from "react-icons/io5";
import FilterSearchInput from "../filterSearchInput/filterSearchInput";
import CourseType from "./courseType/courseType";
import CourseLevel from "./courseLevel/courseLevel";
import TeacherName from "./teacherName/teacherName";
import CourseTech from "./courseTech/courseTech";

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
  searchQuery,
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
    <div className="w-full 2xl:w-[337px] h-[550px] bg-lightGray dark:bg-gray-800 rounded-3xl pt-4 space-y-4 sticky top-5">
      <FilterSearchInput
        icon={<FiSearch className="text-2xl" />}
        inputLabel={"جست‌جو دوره"}
        placeholder={"جست جو کنید ..."}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
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
      {/* <DateInput
        icon={<IoCalendarOutline className="text-2xl" />}
        inputLabel={"تاریخ برگزاری"}
      /> */}
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
