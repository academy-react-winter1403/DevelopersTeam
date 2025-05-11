import React from "react";
import { ImHome } from "react-icons/im";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import { useTranslation } from "react-i18next";

const HamberMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="relative hidden">
      <div className="w-56 h-60 rounded-t-2xl border-2 bg-white dark:bg-gray-800 flex flex-col items-start justify-start absolute top-[-22px] right-24 ">
        <NavLink
          to="/"
          className="flex items-center gap-2 my-2 mr-4 text-md dark:text-white"
        >
          <span>
            <ImHome />
          </span>
          {t("home")}
        </NavLink>
        <NavLink
          to="/courses"
          className="flex items-center gap-2 my-2 mr-4 text-md dark:text-white"
        >
          <span>
            <HiOutlineClipboardList />
          </span>
          {t("courses")}
        </NavLink>
        <NavLink
          to="/news"
          className="flex items-center gap-2 my-2 mr-4 text-md dark:text-white"
        >
          <span>
            <HiOutlineNewspaper />
          </span>
          {t("news")}
        </NavLink>
        <NavLink className="flex items-center gap-2 my-2 mr-4 text-md dark:text-white">
          <span>
            <HiOutlineDevicePhoneMobile />
          </span>
          {t("contactUs")}
        </NavLink>
        <div className="border-t-2 border-[#E4E4E4] dark:border-gray-700 w-11/12 h-10 mx-auto flex mt-5">
          <img src={logo} alt="" className="w-10 h-8" />
          <img src={logoText} alt="" className="w-32 h-10" />
        </div>
      </div>
    </div>
  );
};

export default HamberMenu;
