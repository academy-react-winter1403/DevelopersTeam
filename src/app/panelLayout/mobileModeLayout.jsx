import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import http from "./../../core/services/interceptor";
import profilepic from "./../../assets/images/panel/profilepic.svg";
import { CiGrid41 } from "react-icons/ci";
import { PiBookLight } from "react-icons/pi";
import { CiViewTimeline } from "react-icons/ci";
import DrawerMenu from "./drawerMenu";
import { TfiMore } from "react-icons/tfi";
import { useState } from "react";

const MobileModeLayout = () => {
  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="sm:hidden h-[72px] border border-[#F0F0F0] dark:border-gray-700 bg-[#FEFDFF] dark:bg-gray-800 rounded-[47px] flex mx-5 justify-evenly xs:justify-between xs:px-3 items-center">
      <NavLink
        to="/panel/dashboard"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-16 h-16 flex justify-center items-center rounded-full bg-navyBlue dark:bg-blue-700 text-white"
              : "w-16 h-16 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          }`
        }
      >
        <CiGrid41 className="w-8 h-8 dark:text-gray-300" />
      </NavLink>
      <NavLink
        to="/panel/mycourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-16 h-16 flex justify-center items-center rounded-full bg-navyBlue dark:bg-blue-700 text-white"
              : "w-16 h-16 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          }`
        }
      >
        <PiBookLight className="w-8 h-8 dark:text-gray-300" />
      </NavLink>
      <NavLink
        to="/panel/myreservecourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-16 h-16 flex justify-center items-center rounded-full bg-navyBlue dark:bg-blue-700 text-white"
              : "w-16 h-16 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          }`
        }
      >
        <CiViewTimeline className="w-8 h-8 dark:text-gray-300" />
      </NavLink>
      <NavLink
        to="/panel/profile"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue dark:bg-blue-700"
              : "w-14 h-14 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          }`
        }
      >
        <div className="w-8 h-8 border rounded-full dark:border-gray-600">
          <img
            src={data?.currentPictureAddress}
            alt=""
            className={
              !data?.currentPictureAddress
                ? "w-8 h-8 rounded-full bg-navyBlue dark:bg-blue-700"
                : "w-8 h-8 rounded-full"
            }
          />
        </div>
      </NavLink>
      <div className="relative w-14 h-14 rounded-full mx-2 flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700">
        <DrawerMenu isOpen={isOpen} />
        <TfiMore onClick={() => setIsOpen(!isOpen)} className="w-8 h-8" />
      </div>
    </div>
  );
};

export default MobileModeLayout;
