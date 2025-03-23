import React from "react";
import { Link } from "react-router-dom";
import arrowUpLeft from "./../../assets/images/arrow-up-left-01.svg";
import Group from "./../../assets/images/Group 143.svg";
import AxPanel from "./../../assets/images/AxPanel.png";

const FirstPartOfLanding = () => {
  return (
    <>
      <div className=" mt-16 mx-auto md:flex md:flex-row gap-4 justify-center md:w-10/12">
        <div className="text-right indent-2  w-[300px] h-[45%] mx-auto sm:mx-0 mb-6 border-gray-300 border-2 rounded-2xl relative xl:w-4/12 md:h-64">
          <h1 className="font-bold mt-4 text-[20px] ">
            پنل اختصاصی دانشجو
          </h1>
          <h6 className=" text-[12px] indent-2 mt-4 ">پنل های اختصاصی دانشجویی</h6>
          <h6 className=" text-[12px]  mt-2 indent-4 ">
            برای مدیریت دوره ها و تمرین ها
          </h6>
          <img src={AxPanel} alt="" className="w-[50%] h-[50%] mt-4 xl:mr-48  rounded-2xl" />
        </div>
        <div className="w-[300px] indent-2 mx-auto sm:mx-0 h-[45%] border-gray-300 border-2 rounded-2xl bg-[#3772FF] relative xl:w-3/12 md:h-64">
          <h1 className="text-white font-bold mt-4">
            دوره های جدید تابستانه!
          </h1>
          <div className="w-36 h-16 mt-2 text-[13px] mr-3 text-white">
            شروع دوره های جدید مبتدی و پیشرفته برای همین تابستان
          </div>
          <Link>
            <img
              src={arrowUpLeft}
              alt=""
              className=" rounded-full bg-white absolute top-2 left-2 "
            />
          </Link>
          <img
            src={Group}
            alt=""
            className="w-[50%] h-[40%] "
          />
        </div>
        <div className="w-[300px] indent-2 mx-auto sm:mx-0 h-[45%] mt-4 md:h-64 md:mt-0 border-gray-300 border-2 rounded-2xl relative xl:w-2/12">
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
              src={arrowUpLeft}
              alt=""
              className=" rounded-full bg-[#3772FF] absolute top-2 left-2 "
            />
          </Link>
        </div>
      </div>
      <div className="bg-[#3772FF] h-10 w-full mt-15 flex flex-row gap-7 text-white text-[15px]  -rotate-x-15 rotate-y-15">
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>   
      </div>
      <div className=" mt-20 mx-auto flex flex-row gap-3 p-4 justify-center items-center flex-wrap ">
        {/* card1*/}
        <div className="w-full sm:w-1/2 md-1/4 max-w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">01</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        </div>
        {/* card2*/}
        <div className="w-full sm:w-1/2 md:w-1/4 max-w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">02</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        {/* card3*/}
        </div> <div className="w-full sm:w-1/2 md:w-1/4 max-w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">03</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        {/* card4*/}
        </div> <div className="w-full sm:w-1/2 md:w-1/4 max-w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">04</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        </div>
      </div>
    </>
  );
};

export default FirstPartOfLanding;
