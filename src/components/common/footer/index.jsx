import React from "react";
import Academi from "./../../../assets/images/Academi.svg";
import Instagram from "./../../../assets/images/instagram.svg";
import Telegram from "./../../../assets/images/telegram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-11/12 h-auto md:h-52 bg-lightGray rounded-4xl mx-auto mb-10 space-y-7 flex flex-col md:flex-row lg:space-x-10">
      <div className="p-4 order-1 md:order-1">
        <div>
          <img src={Academi} alt="not set" className="size-20" />
        </div>
        <div className="hidden md:block space-y-3 mt-5">
          <div className=" h-8 w-32 flex justify-center items-center bg-white rounded-2xl text-red-400 border border-borderGray space-x-2">
            <img src={Instagram} alt="" className="h-5 w-5 " />
            <span className="text-sm">اینستاگرام</span>
          </div>
          <div className=" h-8 w-32 flex justify-center items-center bg-white rounded-2xl text-blue-400 border border-borderGray space-x-2">
            <img src={Telegram} alt="" className="h-5 w-5 " />
            <span className="text-sm">تلگرام</span>
          </div>
        </div>
      </div>
      <div className="flex ml-5 space-x-12 md:space-x-2  order-2 md:order-3">
        <div>
          <h1 className="text-gray-600 leading-14 mr-6">صفحات</h1>
          <Link>
            <h2 className=" mr-6">خانه</h2>
          </Link>
          <Link>
            <h2 className=" mr-6 whitespace-nowrap">دوره ها</h2>
          </Link>
          <Link>
            <h2 className=" mr-6 whitespace-nowrap">دوره و مقالات</h2>
          </Link>
        </div>
        <div>
          <h1 className="text-gray-600 leading-14 mr-6">ما</h1>
          <Link>
            <h2 className=" mr-6">اساتید</h2>
          </Link>
          <Link>
            <h2 className=" mr-6 whitespace-nowrap">درباره ما</h2>
          </Link>
          <Link>
            <h2 className=" mr-6 whitespace-nowrap">ارتباط با ما </h2>
          </Link>
        </div>
        <div className="hidden xs:block">
          <h1 className="text-gray-600 leading-14 mr-6">صفحات</h1>
          <Link>
            <h2 className=" mr-6">خانه</h2>
          </Link>
          <Link>
            <h2 className=" mr-6 whitespace-nowrap">دوره ها</h2>
          </Link>
          <Link>
            <h2 className=" mr-6 whitespace-nowrap">دوره و مقالات</h2>
          </Link>
        </div>
      </div>
      <div className="space-y-3 p-4 order-3 md:order-2 md:w-80 md:mt-2">
        <h1 className="font-bold text-[15px]">آکادمی کدنویسی بحر</h1>
        <h5 className=" text-gray-600 text-justify  text-[12px]">
          +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا بزرگسال.
          هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم برای موفقیت در
          دنیای فناوری و برنامه نویسی مجهز کنیم.
        </h5>
      </div>
      <div className="flex space-x-4 md:hidden p-4 order-4">
        <div className=" h-8 w-32 flex justify-center items-center bg-white rounded-2xl text-red-400 border border-borderGray space-x-2">
          <img src={Instagram} alt="" className="h-5 w-5 " />
          <span className="text-sm">اینستاگرام</span>
        </div>
        <div className=" h-8 w-32 flex justify-center items-center bg-white rounded-2xl text-blue-400 border border-borderGray space-x-2">
          <img src={Telegram} alt="" className="h-5 w-5 " />
          <span className="text-sm">تلگرام</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
