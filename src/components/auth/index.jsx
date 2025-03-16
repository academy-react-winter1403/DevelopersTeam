import React from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";

const Auth = () => {
  return (
    <div dir="rtl" className="grid grid-cols-5 w-full h-[800px] ">
      <div className="col-span-2 bg-lightGrey">
        <div className="w-fit flex flex-row items-center relative top-24 right-16">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logoText} alt="text" className="w-44 h-8 mt-3" />
        </div>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Auth;
