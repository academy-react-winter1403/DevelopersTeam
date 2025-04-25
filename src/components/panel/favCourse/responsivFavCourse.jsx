import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";
import DateComponent from "../../common/date/dateComponent";

const ResponsivFavCourse = ({ showDrawer, data }) => {
  return (
    <div className="w-full h-auto sm:hidden pb-3">
      <div className="w-full h-auto flex justify-between items-center mt-5 mb-5  ">
        <h2 className="text-lg font-bold dark:text-white">علاقه مندی دوره</h2>
        <h2 className="w-20 h-9  ">
          {/* <span className="text-white dark:text-gray-200">فیلتر</span> */}
        </h2>
      </div>

      {data?.map((item) => {
        return (
          <div className="bg-white w-full dark:bg-gray-800">
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex items-center gap-3 dark:border-gray-600">
              <div
                onClick={() => showDrawer(item)}
                className="w-28 h-24 mt-8  overflow-hidden"
              >
                <img
                  src={
                    item.tumbImageAddress == null
                      ? defImg
                      : item.tumbImageAddress
                  }
                  alt=""
                  className="dark:opacity-90 rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <div
                  onClick={() => showDrawer(item)}
                  className="text-xl font-bold line-clamp-1 dark:text-white"
                >
                  {item.courseTitle}
                </div>
                <div className="text-[#787878] text-sm font-semibold dark:text-gray-300">
                  {item.teacheName}
                </div>
                <div className="text-[#787878] text-sm font-semibold dark:text-gray-300">
                  <DateComponent insertDate={item.lastUpdate} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsivFavCourse;
