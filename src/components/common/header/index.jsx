import React, { useState } from "react";
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import darkMood from "./../../../assets/images/darkLego.svg";
import { NavLink } from "react-router-dom";
import { AlignLeftOutlined } from "@ant-design/icons";
import { getData } from "../../../core/localStorage/localStorage";
import { FiUser } from "react-icons/fi";
import { Button } from "antd";
import HeaderDrawer from "../../headerDrawer/headerDrawer";
import { IoMoonOutline } from "react-icons/io5";
import { useDarkMode } from "../../../context/theme/themeContext";
import { GoSun } from "react-icons/go";

const Header = () => {
  const token = getData("authToken");
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className="border-[#E4E4E4] dark:border-gray-700 cursor-pointer mt-5 mx-auto flex flex-nowrap justify-between px-10">
      <div className="flex w-1/5 justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 object-contain xs:w-12 xs:h-14 dark:invert"
        />
        <img src={logoText} alt="text" className="w-24 h-10 object-contain dark:invert" />
      </div>
      <div className="w-3/5 lg:flex justify-center items-center gap-10 hidden">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "text-navyBlue dark:text-blue-400" : "dark:text-gray-300"}`}
        >
          <span className="leading-12">خانه</span>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => `${isActive ? "text-navyBlue dark:text-blue-400" : "dark:text-gray-300"}`}
        >
          <span className="leading-12">دوره ها</span>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => `${isActive ? "text-navyBlue dark:text-blue-400" : "dark:text-gray-300"}`}
        >
          <span className="h-28 leading-12">اخبار و مقالات</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `${isActive ? "text-navyBlue dark:text-blue-400" : "dark:text-gray-300"}`}
        >
          <span className="h-28 leading-12">ارتباط با ما</span>
        </NavLink>
      </div>
      <div className="flex w-1/5 justify-center items-center space-x-3">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="border-2 border-gray-200 dark:border-gray-600 w-9 h-9 lg:flex justify-center items-center rounded-full hidden"
        >
          {darkMode ? (
            <GoSun className="size-5 text-yellow-300 cursor-pointer" />
          ) : (
            <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
          )}
        </div>
        <div className="flex items-center justify-center">
          {token ? (
            <NavLink to="/panel/dashboard">
              <Button
                type="primary"
                shape="round"
                icon={<FiUser className="w-4 h-4 mt-1" />}
                style={{
                  fontFamily: "yekan",
                  marginRight: "4px",
                  fontSize: "12px",
                }}
              >
                پنل دانشجویی
              </Button>
            </NavLink>
          ) : (
            <Button
              type="primary"
              shape="round"
              style={{ fontFamily: "yekan" }}
            >
              <NavLink to="/login">
                <span className="border-l pl-1 dark:text-white">ورود</span>
              </NavLink>
              <NavLink to="/register">
                <span className="dark:text-white">ثبت نام</span>
              </NavLink>
            </Button>
          )}
          <HeaderDrawer />
        </div>
      </div>
    </div>
  );
};

export default Header;