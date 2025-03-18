import React from "react";
import { CiMail } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";
import { TbUserSquareRounded } from "react-icons/tb";

const Steps = () => {
  const detail = [
    {
      id: 1,
      title: "وارد کردن شماره همراه",
      icon: <CiMail className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "تایید کد ارسال شده به شماره همراه",
      icon: <TbLockPassword className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "وارد کردن اطلاعات حساب کاربری",
      icon: <TbUserSquareRounded className="w-6 h-6" />,
    },
  ];

  return (
    <div className=" w-96 h-20 mt-10">
      {detail.map((item) => {
        return (
          <div className="w-full h-full flex items-center space-x-5">
            <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
              {item.icon}
            </div>
            <div>
              <h1 className="text-grey">{item.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
