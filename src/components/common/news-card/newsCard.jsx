
import React from "react";
import QuillWrite from "./../../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../../assets/images/view-stroke-rounded (1) 1.svg";
import ThumbUp from "./../../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../../assets/images/thumb-down.svg";
import { Link } from "react-router-dom";

const NewsCard = ({ addUserProfileImage, title, miniDescribe, addUserFullName }) => {

  

  return (
    <div className="flex flex-col border-2 border-gray-50 rounded-2xl bg-gray-50 p-4 w-full  sm:max-w-[300px] md:max-w-[300px] mx-auto">
      <div className="h-40 w-full rounded-2xl overflow-hidden">
        <img
          src={addUserProfileImage}
          alt=""
          className="h-full w-full object-cover mx-auto "
        />
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-[#272727] overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </h2>
      </div>
      <div className="mt-2">
        <h2 className="text-[#787878] text-[10px] overflow-hidden text-ellipsis whitespace-nowrap">
          {miniDescribe}
        </h2>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <img src={QuillWrite} alt="Quill Write" className="h-4 w-5" />
        <span className="text-[12px] text-[#272727]">{addUserFullName}</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <img src={ViewStroke} alt="View Stroke" className="h-4 w-5" />
        <span className="text-[12px] text-[#272727]">225</span>
      </div>
      <div className="flex justify-between items-center m-2 gap-4">
        <div className="flex items-center gap-1">
          <img src={ThumbUp} alt="Thumb Up" className="h-5 w-5" />
          <span className="text-[12px] text-[#272727]">22</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={thumbDown} alt="Thumb Down" className="h-5 w-5" />
          <span className="text-[12px] text-[#272727]">1</span>
        </div>
        <div>
          <Link>
            <h2 className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm text-center cursor-pointer">
              بیشتر بخوانید
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
