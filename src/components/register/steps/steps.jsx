import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import { TbUserSquareRounded } from "react-icons/tb";

const Steps = ({ step }) => {
  const detail = [
    {
      title: "وارد کردن شماره همراه",
      icon: <HiOutlineMail className="w-6 h-6" />,
    },
    {
      title: "تایید کد ارسال شده به شماره همراه",
      icon: <TbLockPassword className="w-6 h-6" />,
    },
    {
      title: "وارد کردن اطلاعات حساب کاربری",
      icon: <TbUserSquareRounded className="w-6 h-6" />,
    },
  ];

  return (
    <div className=" w-96 h-20 mt-10">
      {detail.map((item, index) => {
        return (
          <div className="w-full h-full flex items-center space-x-5">
            <div
              className={`w-12 h-12 rounded-full bg-white flex justify-center items-center dark:text-black ${
                step > index && "!bg-navyBlue text-white w-14 h-14"
              }`}
            >
              {item.icon}
            </div>
            <div>
              <h1
                className={`text-gray text-sm lg:text-base dark:text-white ${
                  step > index && "font-semibold !text-black"
                }`}
              >
                {item.title}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
