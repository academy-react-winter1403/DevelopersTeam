import React from "react";
import QuillWrite from "./../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../assets/images/view-stroke-rounded (1) 1.svg";
import ThumbUp from "./../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../assets/images/thumb-down.svg";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsItemCard = ({
  addUserProfileImage,
  title,
  miniDescribe,
  addUserFullName,
  insertDate,
}) => {
  return (
    <div className="hidden sm:block my-5 rounded-2xl 2xl:h-72 bg-lightGray  w-full ">
      <div className="flex 2xl:gap-5 justify-between">
        <div className="flex-shrink-0">
          <img
            src={addUserProfileImage}
            alt="Profile"
            className="2xl:w-[430px] w-4/5 h-full md:h-72 bg-black object-contain rounded-3xl"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/assets/#787878"; // مسیر صحیح برای تصویر جایگزین
            }}
          />
        </div>
        <div className="lg:mt-2 md:w-4/5 w-full mt-0 md:mt-3">

          <div className=" sm:mt-2 w-full max-w-[300px] overflow-hidden">
            <h2 className="text-lg font-bold  text-[#272727] overflow-hidden text-ellipsis truncate whitespace-nowrap sm:mt-2 ">
              {title}
            </h2>
          </div>
          <div className="mt-2 w-full max-w-[300px]">
            <h2 className="text-[#787878] text-sm  font-semibold overflow-hidden text-ellipsis truncate whitespace-nowrap">
              {miniDescribe}
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={QuillWrite}
              alt="Quill Write"
              className="md:h-5 md:w-5 w-4 h-4"
            />
            <span className="text-sm  font-bold text-[#272727]">
              {addUserFullName}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={ViewStroke}
              alt="View Stroke"
              className="md:h-5 md:w-5 w-4 h-4"
            />
            <span className="text-sm font-bold text-[#272727]">
              225
            </span>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <MdOutlineDateRange className="md:h-5 md:w-5 w-4 h-4" />
            <span className="text-sm  font-bold text-[#272727]">
              {insertDate}
            </span>
          </div>
          <div className="flex justify-between items-center mt-6 gap-4 ml-1 sm:mb-2">
            <div className=" flex justify-around gap-10">
              <div className="flex items-center justify-between gap-1  ">
                <img
                  src={ThumbUp}
                  alt="Thumb Up"
                  className="md:h-5 md:w-5 w-4 h-4"
                />
                <span className="text-sm font-bold text-[#272727]">
                  22
                </span>
              </div>
              <div className="flex  gap-1">
                <img
                  src={thumbDown}
                  alt="Thumb Down"
                  className="md:h-5 md:w-5 w-4 h-4"
                />
                <span className="text-sm font-bold text-[#272727]">
                  1
                </span>
              </div>
            </div>

            <div className="md:px-2">
              <Link>
                <h2 className="bg-navyBlue rounded-xl text-white lg:h-9 md:rounded-full md:px-4 py-1 text-sm px-1 line-clamp-1 text-center cursor-pointer">
                  بیشتر بخوانید
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItemCard;



