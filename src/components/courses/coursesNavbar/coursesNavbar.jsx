import { Button } from "antd";
import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import DrawerFilterSection from "../drawerFilterSection/drawerFilterSection";
import GridListButton from "./grid-list-button/gridListButton";
import SortCustomButton from "./sortCustomButton/sortCustomButton";

const CoursesNavbar = ({
  setViewMode,
  viewMode,
  setSelectedSort,
  selectedSort,
}) => {
  return (
    <div className="flex w-full h-24 p-5 space-x-5">
      <GridListButton setViewMode={setViewMode} viewMode={viewMode} />
      <div className="hidden lg:flex items-center w-auto h-10 pl-3 border-l text-gray space-x-3 ">
        <SortCustomButton
          data={{ text: "پرطرفدار ترین", id: "Cost" }}
          selected={selectedSort}
          setSelected={setSelectedSort}
        />
        <SortCustomButton
          data={{ text: "محبوب ‌ترین", id: "StatusName" }}
          selected={selectedSort}
          setSelected={setSelectedSort}
        />
        <SortCustomButton
          data={{ text: "پرامتیاز ترین", id: "LastUpdate" }}
          selected={selectedSort}
          setSelected={setSelectedSort}
        />
      </div>
      <div className="hidden lg:flex items-center w-auto h-10">
        <Button
          shape="round"
          icon={<RxCross2 className="text-lg" />}
          style={{ fontFamily: "yekan" }}
          danger
          onClick={() => setSelectedSort("")}
        >
          حذف
        </Button>
      </div>
      <div className="flex items-center justify-between h-10 w-full lg:hidden">
        <IoIosSearch className="text-3xl" />
        <DrawerFilterSection />
      </div>
    </div>
  );
};

export default CoursesNavbar;
