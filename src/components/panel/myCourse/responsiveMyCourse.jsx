import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";
import DateComponent from "../../common/date/dateComponent";

const ResponsiveMyCourse = ({ showDrawer }) => {
  const getMyCourse = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate`
    );
    return res;
  };
  const { data } = useQuery({
    queryKey: "myCoursePanel",
    queryFn: getMyCourse,
  });

  return (
    <div className="w-full h-auto sm:hidden dark:bg-gray-800">
      {data?.listOfMyCourses.map((item) => {
        return (
          <div
            onClick={() => showDrawer(item)}
            className="bg-white w-full dark:bg-gray-800"
            key={item.courseId}
          >
            <div className="border-b border-gray-200 w-11/12 mx-auto h-32 flex items-center gap-3 dark:border-gray-700">
              <div className="w-28 h-24 mt-8">
                <img
                  src={
                    item.tumbImageAddress == null
                      ? defImg
                      : item.tumbImageAddress
                  }
                  alt={item.courseTitle}
                  className="dark:border dark:border-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold line-clamp-1 dark:text-white">
                  {item.courseTitle}
                </div>
                <div className="text-gray-500 text-sm font-semibold dark:text-gray-300">
                  {item.fullName}
                </div>
                <div className="text-gray-500 text-sm font-semibold dark:text-gray-300">
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

export default ResponsiveMyCourse;
