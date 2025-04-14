import React from "react";
import { Button } from "antd";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import DrawerFilterSection from "../../courses/drawerFilterSection/drawerFilterSection";
import SortCustomButton from "../../courses/coursesNavbar/sortCustomButton/sortCustomButton";

const SortMyReserve = ({ setSelectedSort, selectedSort }) => {
  return (
    <div className="hidden sm:block">
      <div className="flex w-full h-24 p-5 space-x-5 ">
        <h2 className="leading-14 text-[#787878]">ترتیب</h2>
        <div className="hidden lg:flex items-center w-auto h-14 pl-3 border-l text-gray space-x-3  ">
          <SortCustomButton
            data={{ text: " تایید شده", id: "LastUpdate" }}
            selected={selectedSort}
            setSelected={setSelectedSort}
            
          />
          <SortCustomButton
            data={{ text: " تایید نشده", id: "InsertDate" }}
            selected={selectedSort}
            setSelected={setSelectedSort}
          />
        </div>
        <div className="hidden lg:flex items-center w-auto h-14">
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
    </div>
  );
};

export default SortMyReserve;
