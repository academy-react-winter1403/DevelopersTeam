import React from "react";
import { Link } from "react-router-dom";
import arrowUpLeft from "./../../assets/images/arrow-up-left-01.svg";
import arrowUpLeftStoke from "./../../assets/images/arrow-up-left-01-stroke-rounded 1.svg";
import Group from "./../../assets/images/Group 143.svg";
import AxPanel from "./../../assets/images/AxPanel.png";
// import { Marquee } from "./marquee";

const FirstPartOfLanding = () => {
  return (
    <>
      <div className=" mt-16 mx-auto gap-4 md:flex  md:flex-row  md:justify-center  md:w-10/12 ">
        <div className="text-right indent-2  w-[300px] h-[45%] mx-auto md:mx-0 mb-6 border-[#E4E4E4] border-2 rounded-2xl relative xl:w-4/12 md:h-64">
          <h1 className="font-bold mt-4 text-[20px] ">پنل اختصاصی دانشجو</h1>
          <h6 className=" text-[12px] indent-2 mt-4 ">
            پنل های اختصاصی دانشجویی
          </h6>
          <h6 className=" text-[12px]  mt-2 indent-4 ">
            برای مدیریت دوره ها و تمرین ها
          </h6>
          <img
            src={AxPanel}
            alt=""
            className="w-[60%] h-[50%] mt-4 mr-28 md:mr-20 lg:mr-24 xl:mr-32 2xl:mr-40  rounded-2xl"
          />
        </div>

        <div className="w-[300px] indent-2 mx-auto md:mx-0 h-[45%] border-[#E4E4E4] border-2 rounded-2xl bg-[#3772FF] relative xl:w-3/12 md:h-64 font-bold md:text-[12px]">
          <h1 className="text-white font-bold mt-4">دوره های جدید تابستانه!</h1>
          <div className="w-36 h-16 mt-2 text-[13px] mr-3 text-white md:text-[10px] md:mr-0 ">
            <h2>شروع دوره های جدید مبتدی و</h2>
            <h2>پیشرفته برای همین تابستان</h2>
          </div>
          <Link>
            <img
              src={arrowUpLeft}
              alt=""
              className=" rounded-full bg-white absolute top-2 left-2 w-8 h-8 p-1 object-contain "
            />
          </Link>
          <img
            src={Group}
            alt=""
            className="w-[55%] h-[40%] mr-36 md:mr-20 md:w-[65%] md:h-[50%] md:mt-8 lg:mr-24 lg:w-[75%] lg:h-[60%] lg:mt-4 2xl:mr-32"
          />
        </div>

        <div className="w-[300px] indent-2 mx-auto md:mx-0 h-[45%] mt-4 md:h-64 md:mt-0 border-[#E4E4E4] border-2 rounded-2xl relative xl:w-2/12">
          <div>
            <h3 className="mt-3 mr-2">درباره ما</h3>
            <h4 className=" mr-2">بیشتر بخوانید</h4>
          </div>
          <div className="mt-15 mr-2">
            <h1>+1000</h1>
            <h6 className="text-[10px] text-gray-500">دانشجو آنلاین در دوره</h6>
          </div>
          <div className="mt-10 mr-2">
            <h1>+13</h1>
            <h6 className="text-[10px] text-gray-500 mb-4">سال سابقه آموزشی</h6>
          </div>
          <Link>
            <img
              src={arrowUpLeftStoke}
              alt=""
              className="rounded-full bg-[#3772FF] absolute top-2 left-2 w-8 h-8 p-1 object-contain fill-white"
            />
          </Link>
        </div>
      </div>

   
      {/* <Marquee /> */}
    </>
  );
};

export default FirstPartOfLanding;
