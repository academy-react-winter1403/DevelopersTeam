import React from "react";
import { Link } from "react-router-dom";
import arrowUpLeft from "./../../assets/images/arrow-up-left-01.svg";
import Group from "./../../assets/images/Group 143.svg";

const FirstPartOfLanding = () => {
  return (
    <>
      <div className=" w-[1400px] h-52 mt-16 mx-auto flex flex-row justify-center gap-3">
        <div className="w-[400px] border-gray-300 border-2 rounded-2xl">
          <h1 className="font-bold text-[20px] pr-4  leading-14">
            پنل اختصاصی دانشجو
          </h1>
          <h6 className=" text-[12px] pr-4 mt-2">پنل های اختصاصی دانشجویی</h6>
          <h6 className=" text-[12px] pr-4 mt-2">
            برای مدیریت دوره ها و تمرین ها
          </h6>
        </div>
        <div className="w-[350px] border-gray-300 border-2 rounded-2xl bg-[#3772FF] relative">
          <h1 className="text-white font-bold mt-4 mr-3">
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
            className="w-40 h-36 absolute left-0 top-18"
          />
        </div>
        <div className="w-[270px] border-gray-300 border-2 rounded-2xl relative">
          <div>
            <h3 className="mt-3 mr-2">درباره ما</h3>
            <h4 className=" mr-2">بیشتر بخوانید</h4>
          </div>
          <div className="mt-9 mr-2">
            <h1>+1000</h1>
            <h6 className="text-[10px] text-gray-500">دانشجو آنلاین در دوره</h6>
          </div>
          <div className="mt-5 mr-2">
            <h1>+13</h1>
            <h6 className="text-[10px] text-gray-500">سال سابقه آموزشی</h6>
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
      <div className="bg-[#3772FF] h-10 w-full mt-15 flex flex-row gap-10 text-white text-[15px]  -rotate-x-15 rotate-y-15">
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>
        <ul className="mt-1">خدماتی که ما به شما ارائه می دهیم</ul>   
      </div>
      <div className="w-[1100px] h-48 mt-20 mx-auto flex flex-row gap-3">
        <div className="w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">01</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        </div>
        <div className="w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">02</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        </div> <div className="w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">03</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        </div> <div className="w-[250px] border-gray-400 border-[1px] h-44 rounded-2xl">
         <h1 className="border-b-2 border-gray-300 w-[230px] mt-4 pb-3 mx-auto text-[20px]">04</h1>
         <h3 className="mr-2 mt-2">مدرک معتبر</h3>
        </div>
      </div>
    </>
  );
};

export default FirstPartOfLanding;
