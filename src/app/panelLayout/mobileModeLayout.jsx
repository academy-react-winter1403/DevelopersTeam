import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import http from "./../../core/services/interceptor";
import profilepic from "./../../assets/images/panel/profilepic.svg";
import { CiGrid41 } from "react-icons/ci";
import { PiBookLight } from "react-icons/pi";
import { CiViewTimeline } from "react-icons/ci";
import DrawerMenu from "./drawerMenu";

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
              ? "w-16 h-16 flex justify-center items-center rounded-full bg-navyBlue text-white"
              : "w-16 h-16 flex justify-center items-center rounded-full"
          }`
        }
      >
        <CiGrid41 className="w-8 h-8" />
      </NavLink>
      <NavLink
        to="/panel/mycourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-16 h-16 flex justify-center items-center rounded-full bg-navyBlue text-white"
              : "w-16 h-16 flex justify-center items-center rounded-full"
          }`
        }
      >
        <PiBookLight className="w-8 h-8" />
      </NavLink>
      <NavLink
        to="/panel/myreservecourse"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-16 h-16 flex justify-center items-center rounded-full bg-navyBlue text-white"
              : "w-16 h-16 flex justify-center items-center rounded-full"
          }`
        }
      >
        <CiViewTimeline className="w-8 h-8" />
      </NavLink>
      <NavLink
        to="/panel/profile"
        className={({ isActive }) =>
          `${
            isActive
              ? "w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue"
              : "w-14 h-14 flex justify-center items-center rounded-full"
          }`
        }
      >
        {/* <LuBookMarked className="w-8 h-8" /> */}
        <div className="w-8 h-8 border rounded-full">
          <img
            src={data?.currentPictureAddress}
            alt=""
            className={
              !data?.currentPictureAddress
                ? "w-8 h-8 rounded-full bg-navyBlue"
                : "w-8 h-8 rounded-full"
            }
          />
        </div>
      </NavLink>
      <div className=" w-14 h-14 rounded-full mx-2 flex justify-center items-center ">
        <DrawerMenu />
      </div>
    </div>
  );
};

export default MobileModeLayout;
