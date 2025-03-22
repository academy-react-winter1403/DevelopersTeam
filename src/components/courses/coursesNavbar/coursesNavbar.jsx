import { Button } from "antd";
import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";

const CoursesNavbar = () => {
  return (
    <div className="flex w-full border h-24 p-5 space-x-5">
      <div className=" flex items-center w-20 h-10 text-3xl text-gray border-l space-x-2">
        <CiGrid41 className="hover:text-navyBlue" />
        <CiGrid2H className="hover:text-navyBlue" />
      </div>
      <div className="flex items-center w-20 h-10 text-gray space-x-3">
        <Button type="primary" shape="round" className="flex justify-center items-center"  >پرطرفدار ترین</Button>
        <Button  shape="round" className="flex justify-center items-center"  > محبوب ‌ترین</Button>
        <Button shape="round" className="flex justify-center items-center"  > پرامتیاز ترین</Button>
      </div>
      <div className="">
      <Button type="primary" danger ghost>
      Danger
    </Button>
      </div>
    </div>
  );
};

export default CoursesNavbar;
