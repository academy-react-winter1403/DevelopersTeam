import React from "react";
import profilepic from "./../../../assets/images/panel/profilepic.svg";
import { LuImagePlus } from "react-icons/lu";

const Profile = () => {
  return (
    <div className="w-full h-auto border bg-white rounded-2xl mt-5">
      <div className="w-full h-28 bg-[#3772FF] rounded-t-2xl"></div>
      <div className="border-6 border-white rounded-full w-32 h-32 bg-[#3772FF] mt-[-60px] mr-10">
        <img src={profilepic} alt="" className="mx-auto" />
        <div className="bg-[#3772FF] border-6 border-white rounded-full w-8 h-8 flex items-center mt-[-15px]">
          <LuImagePlus className=" w-4 h-4 mx-auto" />
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-6 border w-50 ">پارسا آقایی</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
