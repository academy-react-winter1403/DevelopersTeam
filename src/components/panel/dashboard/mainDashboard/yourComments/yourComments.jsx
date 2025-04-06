import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import img from './../../../../../assets/images/panel/dashboard01.svg'

const YourComments = () => {
  return (
    <div className="col-span-3 flex flex-col bg-[#FEFDFF] h-72 p-3 rounded-2xl">
      <div className="flex justify-between ">
        <span className="font-semibold">نظرات‌ شما</span>
        <span className="flex items-center text-navyBlue space-x-2">
          <span>مشاهده همه</span>
          <FiChevronLeft />
        </span>
      </div>
      <div className="relative">
        <img src={img} alt="" className=" w-xl h-60 absolute " />
      </div>
    </div>
  );
};

export default YourComments;
