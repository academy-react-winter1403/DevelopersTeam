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

const Header = () => {
  const token = getData("authToken");

  return (
    <div className="border-[#E4E4E4] mt-5 mx-auto flex flex-nowrap justify-between px-10">
      <div className=" flex w-1/5 justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className=" w-10 h-10 object-contain xs:w-12 xs:h-14"
        />
        <img src={logoText} alt="text" className="w-24 h-10 object-contain " />
      </div>
      <div className=" w-3/5 lg:flex justify-center items-center gap-10 hidden">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "text-navyBlue " : ""}`}
        >
          <span className="leading-12">خانه</span>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => `${isActive ? "text-navyBlue" : ""}`}
        >
          <span className="leading-12">دوره ها</span>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => `${isActive ? "text-navyBlue" : ""}`}
        >
          <span className=" h-28 leading-12">اخبار و مقالات</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `${isActive ? "text-navyBlue" : ""}`}
        >
          <span className=" h-28 leading-12">ارتباط با ما</span>
        </NavLink>
      </div>
      <div className="flex w-1/5  justify-center items-center space-x-3">
        <div className="border-2 border-gray-200 w-9 h-9 lg:flex justify-center items-center rounded-full hidden">
          <IoMoonOutline className="size-5" />
        </div>
        <div className="flex items-center justify-center">
          {token ? (
            <Button
              type="primary"
              shape="round"
              icon={<FiUser className="w-4 h-4 mt-1" />}
              style={{ fontFamily: "yekan", marginRight: "4px" , fontSize:'12px' }}
              
            >
              پنل دانشجویی
            </Button>
          ) : (
            <Button
              type="primary"
              shape="round"
              style={{ fontFamily: "yekan" }}
            >
              <NavLink to="/login">
                <span className="border-l pl-1">ورود</span>
              </NavLink>
              <NavLink to="/register">
                <span>ثبت نام</span>
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
