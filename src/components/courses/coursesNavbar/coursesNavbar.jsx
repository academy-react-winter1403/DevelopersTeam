import { Button } from "antd";
import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

const CoursesNavbar = () => {
  return (
    <div className="flex w-full h-24 p-5 space-x-5 border-2">
      <div className="hidden lg:flex items-center w-auto h-10 pl-3 text-3xl text-gray border-l space-x-2 border-2 border-blue-400">
        <CiGrid41 className="hover:text-navyBlue" />
        <CiGrid2H className="hover:text-navyBlue" />
      </div>
      <div className="hidden lg:flex items-center w-auto h-10 pl-3 border-l text-gray space-x-3 border-2 border-blue-700">
        <Button type="primary" shape="round" style={{ fontFamily: "yekan" }}>
          پرطرفدار ترین
        </Button>
        <Button shape="round" style={{ fontFamily: "yekan" }}>
          محبوب ‌ترین
        </Button>
        <Button shape="round" style={{ fontFamily: "yekan" }}>
          پرامتیاز ترین
        </Button>
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
      <div className="flex items-center justify-between h-10 border w-full lg:hidden">
        <IoIosSearch className="text-3xl" />
        <Button type="primary" shape="round" style={{ fontFamily: "yekan" }}>
          ترتیب و فیلتر
        </Button>
      </div>
    </div>
  );
};
export default CoursesNavbar;
