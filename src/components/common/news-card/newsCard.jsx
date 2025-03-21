import React from "react";

const NewsCard = ({ image , googleTitle , googleDescribe , iconName}) => {
  return (
    <div className="h-[400px] w-1/5 border-2 border-gray-200 rounded-2xl bg-gray-50">

      <div className="h-1/3 rounded-3xl">
        <img src={image} alt="" />
      </div>

      <div>
        <h2 className="mt-14 mr-2">{googleTitle}</h2>
      </div>

      <div className="flex flex-wrap">
        <h2 className="text-gray-400 text-[11px] mt-2 mr-2 ">{googleDescribe}</h2>
      </div>

      <div className="flex gap-2 mt-3 mr-2 leading-4 text-[12px]">
        {/* <img src={TeacherIcon} alt=""  className="h-5 w-5"/>  */}
        {iconName}
      </div>

    </div>
  );
};

export default NewsCard;
