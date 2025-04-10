import React from "react";
import profilepic from "./../../../assets/images/panel/profilepic.svg";
import { LuImagePlus } from "react-icons/lu";
import ProfileTabs from "./tabs/profileTabs";
import { HiMiniUsers, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";

const Profile = () => {
  return (
    <div className="w-full h-auto bg-white rounded-2xl mt-5">
      <div className="w-full h-28 bg-[#3772FF] rounded-t-2xl"></div>
      <div className="border-6 border-white rounded-full w-32 h-32 bg-[#3772FF] mt-[-60px] mr-10">
        <img src={profilepic} alt="" className="mx-auto" />
        <div className="bg-[#3772FF] border-6 border-white rounded-full w-8 h-8 flex items-center mt-[-15px]">
          <LuImagePlus className=" w-4 h-4 mx-auto" />
        </div>
      </div>
      <div className=" w-full mt-5 flex px-4">
        <div className="flex flex-col w-1/2 ">
          <div className=" ">
            <h2 className="font-bold text-3xl   ">
              پارسا آقایی
              <span className="text-sm text-gray leading-8 ">
                (ادمین،دانشجو)
              </span>
            </h2>
          </div>
          <div className="mt-8 text-gray flex items-center gap-5 ">
            <div className="flex items-center gap-1">
              <HiOutlineDevicePhoneMobile className="w-6 h-6 " />
              09117868753
            </div>
            <div className="flex items-center gap-1">
              <HiMiniUsers className="w-6 h-6" />
              4564623643656
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineMail className="w6 h-6" />
              mohseni@gmail.com
            </div>
            <div className="flex">
              <TfiPencil className="text-navyBlue w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <h2 className="text-gray text-md font-bold">درباره من</h2>
          <p>
            من پارسا آقایی دانشجوی نوب سگ هستم که اخیرا دارم یاد میگیرم برنامه
            نویسی رو و امیدوارم از نوبیت دربیام و بتونم یه کاری پیدا کنم تو
            دنیای دیجیتال ، ممنون از همه 😊
          </p>
        </div>
      </div>
      <div className="">
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Profile;
