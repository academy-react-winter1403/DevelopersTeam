import React from "react";
import profilepic from "./../../../assets/images/panel/profilepic.svg";
import { LuImagePlus } from "react-icons/lu";
import ProfileTabs from "./tabs/profileTabs";

const Profile = () => {
  return (
    <div className="w-full h-[10000px] bg-white rounded-2xl mt-5">
      <div className="w-full h-28 bg-[#3772FF] rounded-t-2xl"></div>
      <div className="border-6 border-white rounded-full w-32 h-32 bg-[#3772FF] mt-[-60px] mr-10">
        <img src={profilepic} alt="" className="mx-auto" />
        <div className="bg-[#3772FF] border-6 border-white rounded-full w-8 h-8 flex items-center mt-[-15px]">
          <LuImagePlus className=" w-4 h-4 mx-auto" />
        </div>
        <div className="flex  justify-center items-center w-96">
          <h2 className="font-bold text-2xl mt-6 border flex items-center gap-1 w-96 ">
            پارسا آقایی
            <span className="text-sm text-gray"> (ادمین،دانشجو) </span>
          </h2>
        </div>
      </div>
      <div className="mt-32">
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Profile;
