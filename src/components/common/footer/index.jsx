import React from "react";
import Academi from "./../../../assets/images/Academi.svg";
import Instagram from "./../../../assets/images/instagram.svg";
import Telegram from "./../../../assets/images/telegram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#E4E4E4] border-gray-100 rounded-2xl overflow-hidden  xl:h-64 mx-auto flex flex-wrap flex-row">
      <div className="order-1 h-60 mr-5 mt-5">
        <img src={Academi} alt="" className="w-20 h-20 mr-2" />

        <div className=" hidden xl:flex ">
          <div className="flex justify-center bg-white rounded-2xl text-red-400 h-8 w-32 mr-1 gap-1 mt-3 leading-8">
            <span>
              <img src={Instagram} alt="" className="h-5 w-5 mt-1" />
            </span>{" "}
            <span>اینستاگرام</span>
          </div>

          <div className="flex justify-center  bg-white rounded-2xl text-blue-400 h-8 w-24 mr-1 gap-1 mt-3 leading-8">
            <span>
              <img src={Telegram} alt="" className="h-5 w-5 mt-1" />
            </span>{" "}
            <span>تلگرام</span>
          </div>
        </div>
      </div>

      <div className="order-5 h-60 mr-10">
        <h1 className="font-bold h-10 indent-5 mt-7 text-[20px]">
          آکادمی کدنویسی بحر
        </h1>
        <h5 className="text-[15px] text-gray-600 mt-2 w-72 mx-auto">
          +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا بزرگسال.
          هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم برای موفقیت در
          دنیای فناوری و برنامه نویسی مجهز کنیم.
        </h5>
      </div>

      <div className="order-4 h-60 mr-20">
        <h1 className="text-gray-600 leading-14 mt-5 mr-6">صفحات</h1>
        <Link>
          <h2 className=" mr-6">خانه</h2>
        </Link>
        <Link>
          <h2 className=" mr-6">دوره ها</h2>
        </Link>
        <Link>
          <h2 className=" mr-6">دوره و مقالات</h2>
        </Link>
      </div>

      <div className="order-3 h-60">
        <h1 className="text-gray-600 leading-14 mt-5 mr-6">ما</h1>
        <Link>
          <h2 className=" mr-6">اساتید</h2>
        </Link>
        <Link>
          <h2 className=" mr-6">درباره ما</h2>
        </Link>
        <Link>
          <h2 className=" mr-6">ارتباط با ما </h2>
        </Link>
      </div>

      <div className=" order-2 h-60">
        <h2 className="w-24 h-14 bg-gray-300 mt-15 mr-28 pr-3">
          نماد اعتماد الکترونیک
        </h2>
      </div>
      <div className={"flex xl:hidden order-6"}>
          <div className="flex justify-center bg-white rounded-2xl text-red-400 h-8 w-32 mr-1 gap-1 mt-3 leading-8">
            <span>
              <img src={Instagram} alt="" className="h-5 w-5 mt-1" />
            </span>{" "}
            <span>اینستاگرام</span>
          </div>
          

          <div className="flex justify-center  bg-white rounded-2xl text-blue-400 h-8 w-24 mr-1 gap-1 mt-3 leading-8">
            <span>
              <img src={Telegram} alt="" className="h-5 w-5 mt-1" />
            </span>{" "}
            <span>تلگرام</span>
          </div>
        
      </div>
    </div>
  );
};

export default Footer;
