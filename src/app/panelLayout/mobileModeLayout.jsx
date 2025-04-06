import React from "react";
import { TfiMore } from "react-icons/tfi";

const MobileModeLayout = () => {
  return (
    <div className="sm:hidden h-20 bg-[#FEFDFF] rounded-[47px] flex mx-5 justify-between items-center">
      <div className="flex justify-center items-center space-x-">
        <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-pink-400"></div>
        <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-pink-400"></div>
        <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-pink-400"></div>
        <div className=" w-14 h-14 flex justify-center items-center rounded-full bg-pink-400"></div>
      </div>
      <div className="bg-[#3772FF] w-16 h-16 rounded-full mx-2 flex justify-center items-center ">
        <TfiMore className="text-white w-7 h-7" />
      </div>
    </div>
  );
};

export default MobileModeLayout;
