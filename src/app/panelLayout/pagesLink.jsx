import React from "react";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { LuBookText } from "react-icons/lu";
import { MdOutlineViewTimeline } from "react-icons/md";
import { LuBookMarked } from "react-icons/lu";
import { RiFileMarkedLine } from "react-icons/ri";
import { LiaUserEditSolid } from "react-icons/lia";
const PagesLink = () => {
  return (
    <div className="mt-3 space-y-5">
      <NavLink
        to="/panel"
        end
        className={({ isActive }) =>
          `${
            isActive
              ? "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <RxDashboard className="w-6 h-6" />
        <span>داشبرد</span>
      </NavLink>
      <NavLink
        to="/panel/mycourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
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
              ? "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
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
              ? "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
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
              ? "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <RiFileMarkedLine className="w-6 h-6" />
        <span>علاقه‌مندی مقالات</span>
      </NavLink>
      <NavLink
        to="/panel/profile"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 bg-navyBlue text-white"
              : "w-56 h-14 rounded-4xl flex items-center font-semibold space-x-4 pr-6 hover:bg-lightBlue"
          }`
        }
      >
        <LiaUserEditSolid className="w-6 h-6" />
        <span>پروفایل</span>
      </NavLink>
    </div>
  );
};

export default PagesLink;
