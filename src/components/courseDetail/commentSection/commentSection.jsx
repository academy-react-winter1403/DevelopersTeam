import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

const CommentSection = () => {
  return (
    <div className="h-[800px] border mt-10 flex flex-col items-center">
      <h2 className="w-11/12 h-7 bg-blue-500 text-white rounded-2xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <BiCommentDetail />
        نظرات شما
      </h2>

      <div className="w-11/12 h- [700px] ">
        <div className="flex gap-2 py-4 ">
          <img src="" alt="" className="border rounded-full w-15 h-15" />
          <div>
            <h2> مهرداد علیزاده </h2>
            <h2> تاریخ </h2>
          </div>
        </div>
      </div>
      <h2 className="px-4">
        دوره خیلی خوبی بود واقعا لذت بردم واقعا عالی بود. هم استادش و هم کلاس ها
        منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به مقد
      </h2>
      <div>
        <div className="flex  gap-10">
          <AiOutlineLike className="w-6 h-6" />
          <AiOutlineDislike className="w-6 h-6" />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CommentSection;
