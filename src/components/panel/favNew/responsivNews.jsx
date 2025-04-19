import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";

const ResponsivNews = ({ showDrawer, data }) => {
  return (
    <div className="w-full h-auto sm:hidden  ">
      <div className="w-full h-auto flex justify-between items-center mt-5  ">
        <h2 className="text-lg font-bold dark:text-white">علاقه مندی مقاله</h2>
        <h2 className="w-20 h-9 ">
          {/* <span className="text-white dark:text-gray-200">فیلتر</span> */}
        </h2>
      </div>

      {data?.map((item) => {
        return (
          <div className="bg-white w-full h-auto  dark:bg-gray-800">
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex items-center gap-3 dark:border-gray-600">
              <div onClick={() => showDrawer(item)} className="w-1/3 my-5">
                <img
                  src={
                    item.currentImageAddressTumb == null
                      ? defImg
                      : item.currentImageAddressTumb
                  }
                  alt=""
                  className="dark:opacity-90"
                />
              </div>
              <div className="flex flex-col">
                <div
                  onClick={() => showDrawer(item)}
                  className="text-xl font-bold line-clamp-1 dark:text-white"
                >
                  {item.title}
                </div>
                <div className="text-sm line-clamp-1 dark:text-white">
                  {item.newsData.detailsNewsDto.miniDescribe}
                </div>
                <div className="text-xs line-clamp-1 dark:text-white">
                  {item.newsData.detailsNewsDto.addUserFullName}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsivNews;
