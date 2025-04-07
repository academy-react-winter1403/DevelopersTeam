import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";

const CommentSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-[800px] border-2 border-borderGray rounded-3xl mt-10 flex flex-col items-center p-5 ">
      <h2 className="w-full h-10 bg-blue-500 text-white rounded-2xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <BiCommentDetail />
        نظرات شما
      </h2>

      <div className="w-full">
        <div className="mt-5 ">
          <div className="flex gap-2 py-4 ">
            <img src="" alt="" className="border rounded-full w-15 h-15" />
            <div>
              <h2 className="font-semibold"> مهرداد علیزاده </h2>
              <h2 className="text-gray"> تاریخ </h2>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold">دوره خیلی خوبی بود</h1>
          <p>
            هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و
            تونستم به مقدهم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث
            عقب نموندم و تونستم به مقد
          </p>
        </div>
        <div className="flex space-x-10 mt-5 items-center">
          <div className="flex space-x-5">
            <AiOutlineLike className="w-6 h-6" />
            <AiOutlineDislike className="w-6 h-6" />
          </div>
          <div>
            {isOpen ? (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-10 rounded-full text-md text-navyBlue text-center border px-3 "
              >
                جواب دادن
              </button>
            ) : (
              <div className="w- 10/12 h- auto rounded-3xl text-md  border border-navyBlue leading-8 p-2 flex gap-2 ">
                <div className="border border-navyBlue bg-navyBlue w-13 h-13 rounded-full flex justify-center items-center">
                  <RiTelegram2Line className="w-6 h-6" />
                </div>

                <div className="border border-[#F1F1F1] w-13 h-13 rounded-full flex justify-center items-center">
                  <CiFaceSmile className="w-6 h-6 text-navyBlue" />
                </div>

                <div className="mx-auto w-9/12 ">
                  <input
                    placeholder="عنوان نظر خود را بنویسید"
                    className="border-b-2 mt-3 h-auto border-b-lightGray mx-auto w-11/12 "
                  ></input>
                  <input
                    placeholder="متن نظر خود را بنویسید"
                    className=" h-auto my-3 mx-auto w-11/12 "
                  ></input>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
