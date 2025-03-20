import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";
import { TbUserSquareRounded } from "react-icons/tb";

const StepsForgetPass = () => {
  const detail = [
    {
      title: "وارد کردن ایمیل",
      icon: <CiMail className="w-6 h-6" />,
    },
    {
      title: "وارد کردن رمزعبور جدید",
      icon: <TbLockPassword className="w-6 h-6" />,
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
              <h1 className="text-gray">{item.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsForgetPass;
