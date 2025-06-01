import React from "react";
import DateComponent from "../common/date/dateComponent";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { TagsA } from "../common/course-card/tags/tags";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const RightPart = ({ data, id }) => {
  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };
  return (
    <div className="w-1/3 h-[350px] sm:h-[400px] border-4 border-borderGray dark:border-gray-700 rounded-3xl xl:sticky top-5 p-3 sm:space-y-5 m-4 lg:m-0 line-clamp-1 overflow-hidden truncate dark:bg-gray-800">
      <h2 className="text-lg sm:text-3xl font-bold sm:p-4 dark:text-white">
        {data?.title}
      </h2>

      <div className="w-fit mt-5 lg:mt-[-8px] mr-2">
        <TagsA text={data?.newsCatregoryName} />
      </div>

      <div className="flex gap-2 mt-12 lg:mt-4 xl:mt-10 space-x-2 sm:space-y-2 font-semibold md:text-xl dark:text-gray-300">
        <HiOutlineCalendarDateRange className="w-6 h-6 mr-2 font-semibold dark:text-gray-400" />
        <span>
          <DateComponent insertDate={data?.insertDate} />
        </span>
      </div>

      <div className="flex gap-2 items-center mt-6 sm:mt-1 2xl:mt-[-4px] font-semibold md:text-xl dark:text-gray-300">
        <IoEyeOutline className="w-6 h-6 mr-2 font-semibold dark:text-gray-400" />
        <span>{data?.currentView}</span>
      </div>

      <h2 className="mt-10 sm:mt-6 xl:mt-10  px-2 sm:px-4 text-[#787878] dark:text-gray-400 font-semibold md:text-xl">
        منتشر کننده
      </h2>

      <div className="flex items-center justify-between gap-4 px-2">
        <div className="gap-2 flex items-center">
          <img
            src={
              data?.addUserProfileImage == null
                ? defaultImg
                : data?.addUserProfileImage
            }
            alt="not set"
            className="border border-[#E4E4E4] dark:border-gray-600 rounded-full w-14 h-14 hidden sm:block"
            onError={addDefaultImg}
          />
          <span className="font-semibold text-md sm:text-lg dark:text-gray-300">
            {data?.addUserFullName}
          </span>
        </div>
        <div className="flex justify-evenly gap-2">
          <div
            onClick={() => {
              data?.isCurrentUserFavorite
                ? mutateDeleteFav()
                : mutateFavorite();
            }}
            className="w-12 h-12 rounded-full border border-borderGray dark:border-gray-600 flex justify-center items-center cursor-pointer"
          >
            <MdFavoriteBorder
              className={
                data?.isCurrentUserFavorite
                  ? "size-6 text-navyBlue dark:text-blue-400"
                  : "size-6 hover:text-navyBlue dark:hover:text-blue-400"
              }
            />
          </div>

          <div className="w-12 h-12 rounded-full border border-borderGray dark:border-gray-600 flex justify-center items-center cursor-pointer">
            <div
              className="flex items-center gap-1"
              onClick={() =>
                data?.currentUserIsLike ? mutateDeleteLike() : mutateLike()
              }
            >
              <AiOutlineLike
                className={
                  data?.currentUserIsLike
                    ? "w-6 h-6 text-navyBlue dark:text-blue-400"
                    : "w-6 h-6 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border border-borderGray dark:border-gray-600 flex justify-center items-center cursor-pointer">
            <div
              className="flex items-center gap-1"
              onClick={() =>
                data?.currentUserDissLike ? mutateDisLike() : mutateDisLike()
              }
            >
              <AiOutlineDislike
                className={
                  data?.currentUserIsDissLike
                    ? "w-6 h-6 text-navyBlue dark:text-blue-400"
                    : "w-6 h-6 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
