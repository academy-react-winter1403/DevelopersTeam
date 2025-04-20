import React from "react";
import DateComponent from "../../common/date/dateComponent";
import { TagsAccept, TagsNotAccept } from "../tagStatus/tagStatus";

const ResponseveCommentNews = ({ data }) => {
  return (
    <div className="w-full h-auto sm:hidden pb-3">
      <div className="w-full h-auto flex justify-between items-center mt-5 mb-5">
        <h2 className="text-lg font-bold dark:text-white">کامنت مقالات</h2>
        <div className="w-20 h-9"></div>
      </div>

      {data?.myNewsCommetDtos.map((item, idx) => {
        return (
          <div className="bg-white w-full dark:bg-gray-800" key={item.id || idx}>
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex items-center gap-3 dark:border-gray-600">
              
              <div className="flex flex-col flex-1 w-0 min-w-0">
                <div className="text-md font-bold line-clamp-1 break-all dark:text-white">
                  <span>نام دوره: </span>
                  {item.courseTitle}
                </div>
                <div className="text-[#787878] text-sm font-semibold line-clamp-1 break-all dark:text-gray-300">
                  <span>عنوان: </span>
                  {item.title}
                </div>
                <div className="text-[#787878] text-sm font-semibold line-clamp-1 break-all dark:text-gray-300">
                  <span>نظر: </span>
                  {item.describe}
                </div>
              </div>

              <div className="flex flex-col shrink-0 min-w-fit">
                <div className="text-sm font-semibold dark:text-gray-300">
                  <span>تاریخ ثبت: </span>
                  <DateComponent insertDate={item.insertDate} />
                </div>
                <div className="text-sm font-semibold dark:text-gray-300 mt-2">
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

export default ResponseveCommentNews;
