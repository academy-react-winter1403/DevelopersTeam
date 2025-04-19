import React from "react";
import profilepic from "./../../../assets/images/panel/img.svg";
import { LuImagePlus } from "react-icons/lu";
import ProfileTabs from "./tabs/profileTabs";
import { HiMiniUsers, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";

const Profile = () => {
  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const addDefaultImg = (e) => {
    e.target.src = profilepic;
  };
  return (
    <div className="w-full h-auto bg-white dark:bg-gray-800 rounded-2xl mt-5">
      <div className="w-full h-28 bg-[#3772FF] dark:bg-blue-800 rounded-t-2xl"></div>
      <div className="border-6 border-white flex justify-center items-center rounded-full w-32 h-32 bg-white  mt-[-60px] mr-10">
        <img
          src={
            data?.currentPictureAddress == "Not-set" || null || isLoading
              ? profilepic
              : data?.currentPictureAddress
          }
          alt=""
          className="mx-auto w-28 h-28 rounded-full"
          onError={addDefaultImg}
        />
      </div>
      <div className="w-full mt-5 flex flex-col sm:flex-row px-4">
        <div className="flex flex-col w-full sm:w-1/2">
          <div>
            <h2 className="font-bold text-3xl space-x-2 dark:text-white">
              {data?.fName} {data?.lName}
            </h2>
          </div>
          <div className="mt-4 sm:mt-8 text-gray dark:text-gray-300 flex items-start gap-5 h-auto flex-col xl:flex-row justify-baseline">
            <div className="flex items-center gap-1">
              <HiOutlineDevicePhoneMobile className="w-6 h-6" />
              {data?.phoneNumber}
            </div>
            <div className="flex items-center gap-1">
              <HiMiniUsers className="w-6 h-6" />
              {data?.nationalCode}
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineMail className="w6 h-6" />
              {data?.email}
            </div>
            <div className="flex">
              <TfiPencil className="text-navyBlue dark:text-blue-400 w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <h2 className="text-gray dark:text-gray-300 text-md font-bold">
            درباره من
          </h2>
          <p className="dark:text-gray-200">{data?.userAbout}</p>
        </div>
      </div>
      <div>
        <ProfileTabs data={data} />
      </div>
    </div>
  );
};

export default Profile;
