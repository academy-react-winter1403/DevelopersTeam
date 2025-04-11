import React, { useState } from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import { RxDashboard } from "react-icons/rx";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import PagesLink from "./pagesLink";
import { LuPencilLine } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";
import PagesLinkRes from "./pagesLinkRes";
import MobileModeLayout from "./mobileModeLayout";
import { removeData } from "../../core/localStorage/localStorage";

const PanelLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const handleLogOut = () => {
    removeData("authToken");
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#F0F0F0] overflow-x-hidden">
      <div className="hidden h-[700px] sticky top-0 lg:w-1/5 lg:mx-auto sm:w-20 sm:mx-3 bg-[#FEFDFF] my-4 rounded-2xl p-5 sm:flex flex-col justify-center items-center">
        <div className="flex justify-center items-center ">
          <img src={logo} alt="not set" className="w-14 h-16" />
          <img
            src={logoText}
            alt="not set"
            className="w-44 h-10 mt-1 hidden lg:block"
          />
        </div>
        <div className="mt-4">
          <PagesLink />
          <PagesLinkRes />
        </div>
        <div
          onClick={handleLogOut}
          className="cursor-pointer lg:w-52 xl:w-56 sm:w-14 h-14 text-[#FF5454] mt-16 border-2 border-borderGray lg:rounded-4xl sm:rounded-full flex justify-center items-center font-semibold lg:space-x-4 lg:pr-6"
        >
          <MdOutlineLogout className="w-6 h-6" />
          <span className="hidden lg:block">خروج از حساب</span>
        </div>
      </div>

      <div className="w-5/5 lg:w-4/5 p-5">
        <div className=" w-full h-20 bg-[#FEFDFF] rounded-3xl flex items-center justify-between px-3">
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
      <div>
        <MobileModeLayout />
      </div>
    </div>
  );
};

export default PanelLayout;
