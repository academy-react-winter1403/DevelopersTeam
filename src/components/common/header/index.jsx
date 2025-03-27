import React, { useState } from "react";
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import darkMood from "./../../../assets/images/darkLego.svg";
import { Link, NavLink } from "react-router-dom";
import { AlignLeftOutlined } from "@ant-design/icons";
import { getData } from "../../../core/localStorage/localStorage";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(getData("login"));


  return (
    <div className="   border-[#E4E4E4] mt-5 mx-auto flex flex-nowrap justify-between px-10">
      <div className="flex w-1/5 justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className=" w-10 h-10 object-contain xs:w-12 xs:h-14"
        />
        <img src={logoText} alt="text" className="w-24 h-10 object-contain " />
      </div>
      <div className="w-3/5 xl:flex justify-center gap-10 hidden">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "text-navyBlue" : ""}`}
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

      <div className="ps-24 hidden xl:flex">
        <div className="border-2 border-gray-200 h-9 w-9 p-2 mt-3 rounded-full">
          <img src={darkMood} alt="" className=" " />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {isLoggedIn ? (<h1>555</h1>
         
        ) : ( <Link
          to="/register"
          className="bg-[#3772FF] flex justify-center items-center h-9 px-2 xs:px-3 whitespace-nowrap text-white py-2 xs:py-1 rounded-full m-4 leading-2  text-[10px] xs:text-sm xs:m-3 xs:leading-4 lg:m-3 lg:w-full  font-medium hover:bg-[#2854cc] transition-all w-full xs:w-auto text-center"
        >
          ورود یا ثبت نام
        </Link> )}
       
        <AlignLeftOutlined className="sm:invisible" />
      </div>
    </div>
  );
};

export default Header;
