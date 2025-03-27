import React from "react";
import QuillWrite from "./../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../assets/images/view-stroke-rounded (1) 1.svg";
import ThumbUp from "./../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../assets/images/thumb-down.svg";
import { Link } from "react-router-dom";

const NewsItemCard = ({
  addUserProfileImage,
  title,
  miniDescribe,
  addUserFullName,
}) => {
  return (
    <div className=" my-5 rounded-2xl 2xl:h-60 bg-lightGray">
      <div className="flex 2xl:gap-5 gap-2 ">
        <div>
          <img
            src={addUserProfileImage}
            alt=""
            className="2xl:w-78 w-full h-52 md:h-60 object-contain rounded-2xl"
          />
        </div>
        <div className="mt-5 md:w-full w-3/5  md:mt-3 md:mr-5">
          <div>
            <h2 className="md:text-lg font-bold text-sm text-[#272727] overflow-hidden text-ellipsis whitespace-nowrap mt-5">
              {title}
            </h2>
          </div>
          <div className="mt-2">
            <h2 className="text-[#787878] md:text-sm text-[10px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap mt-5">
              {miniDescribe}
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={QuillWrite}
              alt="Quill Write"
              className="md:h-5 md:w-5 w-4 h-4"
            />
            <span className="md:text-sm text-[10px] font-bold text-[#272727]">
              {addUserFullName}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={ViewStroke}
              alt="View Stroke"
              className="md:h-5 md:w-5 w-4 h-4"
            />
            <span className="md:text-sm text-[10px] font-bold text-[#272727]">
              225
            </span>
          </div>

          <div className="flex justify-between items-center my-2 gap-4 ml-1 ">
            <div className=" flex justify-around gap-10">
              <div className="flex items-center justify-between gap-1  ">
                <img
                  src={ThumbUp}
                  alt="Thumb Up"
                  className="md:h-5 md:w-5 w-4 h-4"
                />
                <span className="md:text-sm text-[10px] font-bold text-[#272727]">
                  22
                </span>
              </div>
              <div className="flex  gap-1">
                <img
                  src={thumbDown}
                  alt="Thumb Down"
                  className="md:h-5 md:w-5 w-4 h-4"
                />
                <span className="md:text-sm text-[10px] font-bold text-[#272727]">
                  1
                </span>
              </div>
            </div>

            <div className="md:px-2">
              <Link>
                <h2 className="bg-navyBlue rounded-xl text-white lg:h-9 md:rounded-full md:px-4 py-1 md:text-sm text-[10px] px-1 line-clamp-1 text-center cursor-pointer">
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
