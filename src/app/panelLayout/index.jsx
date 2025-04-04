import React from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import { RxDashboard } from "react-icons/rx";
import { NavLink, Outlet } from "react-router-dom";
import PagesLink from "./pagesLink";
import { LuPencilLine } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const PanelLayout = () => {
  return (
    <div className="w-full grid grid-cols-5 bg-[#F0F0F0]">
      <div className="col-span-1 w-[276px] h- auto mx-auto bg-[#FEFDFF] my-4 rounded-2xl p-5 ">
        <div className="flex justify-center items-center ">
          <img src={logo} alt="not set" className="w-14 h-16" />
          <img src={logoText} alt="not set" className="w-44 h-10 mt-1" />
        </div>
        <div className="mt-10">
          <h1 className="text-gray">عمومی</h1>
          <PagesLink />
        </div>
        <div className="w-56 h-14 text-[#FF5454] mt-28 border-2 border-borderGray rounded-4xl flex items-center font-semibold space-x-4 pr-6">
          <MdOutlineLogout className="w-6 h-6" />
          <span>خروج از حساب</span>
        </div>
      </div>
      <div className="col-span-4 p-5">
        <div className="w-full h-20 bg-[#FEFDFF] rounded-3xl flex items-center justify-between px-3">
          <div className="flex space-x-3 relative">
            <div className="w-14 h-14 bg-pink-600 rounded-full">
              <img src="" alt="" />
              <LuPencilLine className="absolute top-9 bg-navyBlue text-white p-1 w-6 h-6 rounded-full" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">پارسا آقایی</h1>
              <h1 className="text-gray">role</h1>
            </div>
          </div>
          <div className="flex space-x-3">
            <NavLink
              to="/"
              className="w-14 h-14 border-2 border-borderGray rounded-full flex justify-center items-center"
            >
              <IoHomeOutline className="w-5 h-5" />
            </NavLink>
            <div className="w-14 h-14 border-2 border-borderGray rounded-full flex justify-center items-center">
              <IoMoonOutline className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
