import React from "react";
import Academi from "./../../../assets/images/Academi.svg";
import Instagram from "./../../../assets/images/instagram.svg";
import Telegram from "./../../../assets/images/telegram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-lightGray  w-4/5 md:w-11/12 rounded-2xl overflow-hidden  xl:h-64 mx-auto flex flex-wrap flex-row ">
      <div className="order-1 h-20 mr-5 mt-5 ">
        <img src={Academi} alt="" className="w-20 h-20 mr-2" />

        <div className=" hidden xl:flex xl:flex-col  ">
          <div className="flex justify-center bg-white rounded-2xl text-red-400 h-8 w-32 mr-1 gap-1 mt-3 leading-8">
            <span>
              <img src={Instagram} alt="" className="h-5 w-5 mb-1" />
            </span>{" "}
            <span>اینستاگرام</span>
          </div>

          <div className="flex justify-center  bg-white rounded-2xl text-blue-400 h-8 w-24 mr-1 gap-1 mt-3 leading-8">
            <span>
              <img src={Telegram} alt="" className="h-5 w-5  " />
            </span>{" "}
            <span>تلگرام</span>
          </div>
        </div>
      </div>

      <div className="order-4 h-40 mr-2 mt-[-30px] xl:mt-5 xl:mr-15 md:mt-[20px] md:mr-20 md:h-32">
        <h1 className="font-bold h-8 text-[15px]">آکادمی کدنویسی بحر</h1>
        <h5 className=" text-gray-600  w-72 mx-auto text-[12px]">
          +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا بزرگسال.
          هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم برای موفقیت در
          دنیای فناوری و برنامه نویسی مجهز کنیم.
        </h5>
      </div>

      <div className="order-3 h-40 mr-10 mt-[-200px]  md:order-4 flex  xl:mt-5 xl:mr-15 xl:gap-15 md:mt-[20px] text-[15px]">
        <div className="">
          <h1 className="text-gray-600 leading-14 mr-6">صفحات</h1>
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

        <div>
          <h1 className="text-gray-600 leading-14 mr-6">ما</h1>
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
      </div>

      

      <div className=" order-2 md:order-6 h-60 xl:mr-25 md:mr-70 md:hidden lg:order-2">
        <h2 className="w-24 h-14 bg-gray-300 mt-[-60px] mr-40 pr-3 sm:hidden lg:block ">
          نماد اعتماد الکترونیک
        </h2>
      </div>

      <div className={"flex xl:hidden order-5  md:mt-15 md:mr-5 lg:mt-[-20px]"}>
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
