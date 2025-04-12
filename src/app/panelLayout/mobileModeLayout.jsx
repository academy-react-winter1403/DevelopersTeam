import { useQuery } from "@tanstack/react-query";
import { LuBookText } from "react-icons/lu";
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
    <div className="sm:hidden h-20 bg-[#FEFDFF] rounded-[47px] flex mx-5 justify-between items-center">
      <div className="flex justify-center items-center space-x-">
        <NavLink
          to="/panel"
          className=" w-14 h-14 flex justify-center items-center rounded-full bg-navyBlue"
        >
          <span>
            {" "}
            <RxDashboard className="w-8 h-8" />
          </span>
        </NavLink>
        <NavLink
          to="/panel/mycourse"
          className=" w-14 h-14 flex justify-center items-center rounded-full"
        >
          <span>
            <LuBookText className="w-8 h-8" />
          </span>
        </NavLink>
        <NavLink
          to="/panel/myreservecourse"
          className=" w-14 h-14 flex justify-center items-center "
        >
          <span>
            <MdOutlineViewTimeline className="w-8 h-8" />
          </span>
        </NavLink>
        <NavLink
          to="/panel/profile"
          className=" w-10 h-10 flex justify-center items-center rounded-full bg-pink-500 "
        >
          <img
            src={
              data?.currentPictureAddress == "Not-set"
                ? profilepic
                : data?.currentPictureAddress
            }
            alt=""
            className="mx-auto w-7 h-7"
          />
        </NavLink>
      </div>
      <div className="bg-[#3772FF] w-14 h-14 rounded-full mx-2 flex justify-center items-center ">
        <HamberMenu/>
      </div>
    </div>
  );
};

export default MobileModeLayout;
