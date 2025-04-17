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

const PagesLinkRes = () => {
  return (
    <div className="mt-3 space-y-2 sm:flex flex-col items-center justify-center hidden lg:hidden ">
      <NavLink
        to="/panel/dashboard"
        end
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <RxDashboard className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/profile"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <LiaUserEditSolid className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/mycourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <LuBookText className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/myreservecourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <MdOutlineViewTimeline className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/favcourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <LuBookMarked className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/favnew"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <RiFileMarkedLine className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/mycommentscourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <TfiCommentAlt className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/mycommentsnews"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <TfiCommentAlt className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/panel/payment"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold bg-navyBlue text-white"
              : "w-14 h-14 rounded-4xl flex justify-center items-center font-semibold hover:bg-lightBlue"
          }`
        }
      >
        <CiMoneyCheck1 className="w-6 h-6" />
      </NavLink>
    </div>
  );
};

export default PagesLinkRes;
