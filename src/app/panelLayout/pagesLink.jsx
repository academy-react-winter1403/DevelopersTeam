import React from "react";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { LuBookText } from "react-icons/lu";
import { MdOutlineViewTimeline } from "react-icons/md";
import { LuBookMarked } from "react-icons/lu";
import { RiFileMarkedLine } from "react-icons/ri";
import { LiaUserEditSolid } from "react-icons/lia";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { HiOutlineTicket } from "react-icons/hi2";

const PagesLink = () => {
  return (
    <div className="mt-3 space-y-2 hidden lg:block">
      <NavLink
        to="/panel/dashboard"
        end
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <RxDashboard className="w-6 h-6" />
        <span>داشبرد</span>
      </NavLink>
      <NavLink
        to="/panel/profile"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <LiaUserEditSolid className="w-6 h-6" />
        <span>پروفایل</span>
      </NavLink>
      <NavLink
        to="/panel/mycourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <LuBookText className="w-6 h-6" />
        <span>دوره من</span>
      </NavLink>
      <NavLink
        to="/panel/myreservecourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <MdOutlineViewTimeline className="w-6 h-6" />
        <span>رزرو من</span>
      </NavLink>
      <NavLink
        to="/panel/favcourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <LuBookMarked className="w-6 h-6" />
        <span>علاقه‌مندی دوره</span>
      </NavLink>
      <NavLink
        to="/panel/favnew"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <RiFileMarkedLine className="w-6 h-6" />
        <span>علاقه‌مندی مقالات</span>
      </NavLink>
      <NavLink
        to="/panel/mycommentscourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <TfiCommentAlt className="w-6 h-6" />
        <span>کامنت های دوره</span>
      </NavLink>
      <NavLink
        to="/panel/mycommentsnews"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <TfiCommentAlt className="w-6 h-6" />
        <span>کامنت های مقالات</span>
      </NavLink>
      <NavLink
        to="/panel/payment"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <CiMoneyCheck1 className="w-6 h-6" />
        <span>پرداخت</span>
      </NavLink>
      <NavLink
        to="/panel/ticket"
        className={({ isActive }) =>
          `${
            isActive
              ? "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "lg:w-52 xl:w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <HiOutlineTicket className="w-6 h-6" />
        <span>تیکت ها</span>
      </NavLink>
    </div>
  );
};

export default PagesLink;
