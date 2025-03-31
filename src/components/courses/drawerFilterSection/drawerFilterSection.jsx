import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FiSearch } from "react-icons/fi";
import DateInput from "../dateInput/dateInput";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import FilterSearchInput from "../filterSearchInput/filterSearchInput";
import CourseType from "../filterSection/courseType/courseType";
import CourseLevel from "../filterSection/courseLevel/courseLevel";
import TeacherName from "../filterSection/teacherName/teacherName";
import CourseTech from "../filterSection/courseTech/courseTech";
import PriceSlider from "../priceSlider/priceSlider";
import { RxCross2 } from "react-icons/rx";
import FilterSection from "../filterSection";

const DrawerFilterSection = ({
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const title = (
    <div className="flex justify-between items-center w-full absolute top-5 left-0 px-10">
      <p>ترتیب و فیلتر</p>
      <Button
        shape="round"
        danger
        icon={<IoIosClose className="text-2xl mt-1" />}
        onClick={() => setOpen(false)}
        style={{ fontFamily: "yekan" }}
      >
        بستن
      </Button>
    </div>
  );

  return (
    <>
      <Button
        type="primary"
        shape="round"
        onClick={showLoading}
        style={{ fontFamily: "yekan" }}
      >
        ترتیب و فیلتر
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={title}
        closeIcon={""}
        placement="bottom"
        open={open}
        loading={loading}
      >
        <FilterSection
          setSearchQuery={setSearchQuery}
          setSelectedType={setSelectedType}
          setSelectedLevel={setSelectedLevel}
          setSelectedTeacher={setSelectedTeacher}
          setSelectedTech={setSelectedTech}
          selectedPriceMin={selectedPriceMin}
          setSelectedPriceMin={setSelectedPriceMin}
          selectedPriceMax={selectedPriceMax}
          setSelectedPriceMax={setSelectedPriceMax}
        />
      </Drawer>
    </>
  );
};
export default DrawerFilterSection;
