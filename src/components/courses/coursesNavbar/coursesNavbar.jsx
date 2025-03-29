import { Button } from "antd";
import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import DrawerFilterSection from "../drawerFilterSection/drawerFilterSection";

const CoursesNavbar = ({ setViewMode, viewMode,setSelectedSort,selectedSort }) => {

  return (
    <div className="flex w-full h-24 p-5 space-x-5">
      <div className="hidden lg:flex items-center w-auto h-10 pl-3 text-3xl text-gray border-l space-x-2">
        <CiGrid41
          onClick={() => setViewMode("list")}
          className={`hover:text-navyBlue ${
            viewMode === "list" ? "text-navyBlue" : ""
          }`}
        />
        <CiGrid2H
          onClick={() => setViewMode("grid")}
          className={`hover:text-navyBlue ${
            viewMode === "grid" ? "text-navyBlue" : ""
          }`}
        />
      </div>
      <div className="hidden lg:flex items-center w-auto h-10 pl-3 border-l text-gray space-x-3 ">
        {/* <Button type="primary" shape="round" style={{ fontFamily: "yekan" }}>
          پرطرفدار ترین
        </Button>
        <Button shape="round" style={{ fontFamily: "yekan" }}>
          محبوب ‌ترین
        </Button>
        <Button shape="round" style={{ fontFamily: "yekan" }}>
          پرامتیاز ترین
        </Button> */}
        <CustomButton data={{text:" قیمت",id:"Cost"}} selected={selectedSort} setSelected={setSelectedSort}  />
        <CustomButton data={{text:" قی1مت",id:"priceUp1"}} selected={selectedSort} setSelected={setSelectedSort}  />
        <CustomButton data={{text:" 2",id:"priceUp2"}} selected={selectedSort} setSelected={setSelectedSort}  />
      </div>
      <div className="hidden lg:flex items-center w-auto h-10">
        <Button
          shape="round"
          icon={<RxCross2 className="text-lg" />}
          style={{ fontFamily: "yekan" }}
          danger
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
function CustomButton({data,selected,setSelected}) {
  return (
    <Button  shape="round" onClick={()=>setSelected(data)} style={{ fontFamily: "yekan",background:selected?.id==data.id ?"#fff":"#555" }}>
      {data.text}
    </Button>
  );
}
export default CoursesNavbar;
