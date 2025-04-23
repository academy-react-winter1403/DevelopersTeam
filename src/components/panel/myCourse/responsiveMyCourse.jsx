import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";
import DateComponent from "../../common/date/dateComponent";
import PaginationSection from "../../common/paginationSection/paginationSection";
import { Spin } from "antd";

const ResponsiveMyCourse = ({ showDrawer }) => {
  const [pageNum, setPageNum] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);

  const addDefaultImg = (e) => {
    e.target.src = defImg;
  };

  const getMyCourse = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=${pageNum}&RowsOfPage=${itemPerPage}&SortingCol=DESC&SortType=LastUpdate`
    );
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["myCoursePanel", pageNum, itemPerPage],
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
              <div className="w-28 h-24 flex justify-center items-center overflow-hidden">
                <img
                  src={
                    item.tumbImageAddress == null && "undefined"
                      ? defImg
                      : item.tumbImageAddress
                  }
                  alt={item.courseTitle}
                  className="dark:border dark:border-gray-700 w-28 h-16 rounded-lg"
                  onError={addDefaultImg}
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
      <PaginationSection
        totalCount={data?.totalCount}
        pageNum={pageNum}
        setPageNum={setPageNum}
        itemPerPage={itemPerPage}
      />
    </div>
  );
};

export default ResponsiveMyCourse;
