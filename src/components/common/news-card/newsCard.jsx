import React from "react";
import QuillWrite from "./../../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../../assets/images/view-stroke-rounded (1) 1.svg";
import ThumbUp from "./../../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../../assets/images/thumb-down.svg";
import { Link } from "react-router-dom";

const NewsCard = ({ image , googleTitle , googleDescribe , iconName}) => {
  return (
    <div className="h-[360px] w-1/5 border-2 border-gray-200 rounded-2xl bg-gray-50">

      <div className="h-1/3 rounded-3xl">
        <img src={image} alt="" />
      </div>

      <div>
        <h2 className="mt-14 mr-2 overflow-hidden whitespace-nowrap text-ellipsis">{googleTitle}</h2>
      </div>

      <div className="flex flex-wrap">
        <h2 className="text-gray-400 text-[11px] mt-2 mr-2 overflow-hidden whitespace-nowrap text-ellipsis">{googleDescribe}</h2>
      </div>

      <div className="flex gap-2 mt-3 mr-2 leading-4 text-[12px]">
        <img src={QuillWrite} alt=""  className="h-5 w-5"/> 
        <span className="text-[14px] leading-6">{iconName}</span>
      </div>

      <div className="flex gap-2 mr-2 mt-2">
        <img src={ViewStroke} alt="" className="h-5 w-5"/>225
      </div>

     <div className="flex justify-around mt-1 ">
      <div className="flex gap-1">
          <img src={ThumbUp} alt=""  className="w-6 h-6"/>22
        </div>
        
        <div className="flex gap-1">
          <img src={thumbDown} alt="" className="w-4 h-5"/> 1
        </div>
      <div>
        <Link><h2 className="text-white bg-[#3772FF] rounded-2xl w-32 indent-6 text-[14px] leading-8 h-8 mr-5">بیشتر بخوانید</h2></Link>
      </div>
     </div>
    </div>
  );
};

export default NewsCard;
