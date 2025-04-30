import React from "react";
import DateComponent from "../../common/date/dateComponent";
import { TagsAccept, TagsNotAccept } from "../tagStatus/tagStatus";

const ResponsiveCommentCourse = ({ data }) => {
  return (
    <div className="w-full h-auto sm:hidden pb-3 ">
      <div className="w-full h-auto flex justify-between items-center mt-5 mb-5">
        <h2 className="text-lg font-bold dark:text-white"> کامنت دوره ها</h2>
        <h2 className="w-20 h-9  "></h2>
      </div>

      {data?.myCommentsDtos.map((item) => {
        return (
          <div className="bg-white w-full dark:bg-gray-800">
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex justify-evenly items-center gap-3 dark:border-gray-600">
              <div className="flex flex-col w-40 ">
                <div
                  onClick={() => showDrawer(item)}
                  className="text-xl font-bold line-clamp-1 dark:text-white"
                >
                  <span>نام دوره: </span>
                  {item.courseTitle}
                </div>
                <div className="text-[#787878] text-sm line-clamp-1 font-semibold dark:text-gray-300">
                    <span>عنوان: </span>
                  {item.title}
                </div>
                <div className="text-[#787878] text-sm line-clamp-1 font-semibold dark:text-gray-300">
                <span>نظر: </span>

                  {item.describe}
                </div>
              </div>
              <div className="flex flex-col w-32">
                <div className=" text-sm font-semibold dark:text-gray-300">
                <span>تاریخ ثبت: </span>

                  <DateComponent insertDate={item.insertDate} />
                </div>
                <div className=" text-sm font-semibold dark:text-gray-300 mt-2">
                <span>وضعیت: </span>

                  {item.accept ? (
                    <TagsAccept text="پذیرفته شده" />
                  ) : (
                    <TagsNotAccept text="پذیرفته نشده" />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsiveCommentCourse;
