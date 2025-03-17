import React from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import { LuMailCheck } from "react-icons/lu";

const Auth = () => {
  return (
    <div dir="rtl" className="grid grid-cols-5 w-full h-[800px] ">
      <div className="col-span-2 bg-lightGrey pt-24 pr-16">
        <div className="border w-fit flex flex-row items-center">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logoText} alt="text" className="w-44 h-8 mt-3" />
        </div>
        <div className="border w-96 h-96 ">
          <div className="border w-96 h-32 ">
            <div className="w-16 h-16 rounded-full bg-white">
              <LuMailCheck />
            </div>
          </div>
          <div className="border w-96 h-32"></div>
          <div className="border w-96 h-32"></div>
        </div>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Auth;
