import { useQuery } from "@tanstack/react-query";
import { LuBookMarked, LuBookText } from "react-icons/lu";
import { MdOutlineViewTimeline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import http from "./../../core/services/interceptor";
import profilepic from "./../../assets/images/panel/profilepic.svg";
import HamberMenu from "./hamberPanel";
import { IoIosMore } from "react-icons/io";

const MobileModeLayout = () => {
  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <div className="sm:hidden h-[72px] border border-[#F0F0F0] bg-[#FEFDFF] rounded-[47px] flex mx-5 justify-evenly xs:justify-between xs:px-3  items-center">
      <NavLink
        to="/panel/dashboard"
        // className=" w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue text-white"
              : "w-14 h-14 flex justify-center items-center rounded-full"
          }`
        }
      >
        <RxDashboard className="w-8 h-8" />
      </NavLink>
      <NavLink
        to="/panel/mycourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue text-white"
              : "w-14 h-14 flex justify-center items-center rounded-full"
          }`
        }
      >
        <LuBookText className="w-8 h-8" />
      </NavLink>
      <NavLink
        to="/panel/myreservecourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue text-white"
              : "w-14 h-14 flex justify-center items-center rounded-full"
          }`
        }
      >
        <MdOutlineViewTimeline className="w-8 h-8" />
      </NavLink>
      <NavLink
        to="/panel/favcourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue text-white"
              : "w-14 h-14 flex justify-center items-center rounded-full"
          }`
        }
      >
        <LuBookMarked className="w-8 h-8" />
      </NavLink>
      <NavLink className=" w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue">
        <RxDashboard className="w-8 h-8" />
      </NavLink>
      {/* <div className="bg-[#3772FF] w-14 h-14 rounded-full mx-2 flex justify-center items-center ">
        <HamberMenu />
      </div> */}
    </div>
  );
};

export default MobileModeLayout;
