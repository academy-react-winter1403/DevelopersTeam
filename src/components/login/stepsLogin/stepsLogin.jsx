import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const StepsLogin = ({ currentStep }) => {
  const detail = [
    {
      title: "وارد کردن شماره همراه یا ایمیل",
      icon: <HiOutlineMail className="w-6 h-6" />,
      url: "/login",
    },
    {
      title: "تایید کد ارسال شده",
      icon: <TbLockPassword className="w-6 h-6" />,
      url: "/login/verifycode",
    },
  ];

  return (
    <div className=" w-96 h-20 mt-10">
      {detail.map((item, index) => {
        return (
          <NavLink
            to={item.url}
            className="w-full h-full flex items-center space-x-5"
          >
            <div
              className={`w-12 h-12 rounded-full bg-white flex justify-center items-center dark:text-black ${
                currentStep > index && "!bg-navyBlue text-white w-14 h-14"
              }`}
            >
              {item.icon}
            </div>
            <div>
              <h1
                className={`text-gray text-sm lg:text-base dark:text-white ${
                  currentStep > index && "font-semibold !text-black "
                }`}
              >
                {item.title}
              </h1>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default StepsLogin;
