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
import { GoSidebarCollapse, GoSun } from "react-icons/go";
import PagesLinkRes from "./pagesLinkRes";
import MobileModeLayout from "./mobileModeLayout";
import { removeData } from "../../core/localStorage/localStorage";
import { useQuery } from "@tanstack/react-query";
import { useDarkMode } from "../../context/theme/themeContext";

const PanelLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();

  const handleLogOut = () => {
    removeData("authToken");
    navigate("/");
  };

  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };

  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#F0F0F0] dark:bg-gray-900 overflow-x-hidden">
      <div className="hidden h-[700px] sticky top-0 lg:w-1/5 lg:mx-auto sm:w-20 sm:mx-3 bg-[#FEFDFF] dark:bg-gray-800 my-4 rounded-2xl p-5 sm:flex flex-col justify-center items-center">
        <NavLink to="/" className="flex justify-center items-center">
          <img src={logo} alt="not set" className="w-14 h-16" />
          <img
            src={logoText}
            alt="not set"
            className="w-44 h-10 mt-1 hidden lg:block "
          />
        </NavLink>
        <div className="mt-4">
          <PagesLink />
          <PagesLinkRes />
        </div>
        <div
          onClick={handleLogOut}
          className="cursor-pointer lg:w-52 xl:w-56 sm:w-14 h-14 text-[#FF5454] mt-16 border-2 border-borderGray dark:border-gray-700 lg:rounded-4xl sm:rounded-full flex justify-center items-center font-semibold lg:space-x-4 lg:pr-6"
        >
          <MdOutlineLogout className="w-6 h-6" />
          <span className="hidden lg:block">خروج از حساب</span>
        </div>
      </div>

      <div className="w-5/5 lg:w-4/5 p-5">
        <div className="w-full h-20 bg-[#FEFDFF] dark:bg-gray-800 rounded-3xl flex items-center justify-between px-3">
          <div className="sm:flex space-x-3 relative hidden">
            <div className="w-14 h-14 bg-navyBlue rounded-full">
              <img
                src={userData?.currentPictureAddress}
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <NavLink to="/panel/profile">
                <LuPencilLine className="absolute top-9 bg-navyBlue text-white p-1 w-6 h-6 rounded-full" />
              </NavLink>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold dark:text-white">
                {userData?.fName} {userData?.lName}
              </h1>
            </div>
          </div>
          <div className="block sm:hidden">
            <img src={logo} alt="" className=" " />
          </div>
          <div className="flex space-x-3">
            <NavLink
              to="/"
              className="w-14 h-14 border-2 border-borderGray dark:border-gray-700 bg-[#FEFDFF] dark:bg-gray-800 rounded-full flex justify-center items-center"
            >
              <IoHomeOutline className="w-5 h-5 dark:text-white" />
            </NavLink>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="w-14 h-14 border-2 border-borderGray dark:border-gray-700 rounded-full flex justify-center items-center bg-[#FEFDFF] dark:bg-gray-800"
            >
              {darkMode ? (
                <GoSun className="size-5 cursor-pointer text-white" />
              ) : (
                <IoMoonOutline className="size-5 cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        <div className="dark:text-gray-100">
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
