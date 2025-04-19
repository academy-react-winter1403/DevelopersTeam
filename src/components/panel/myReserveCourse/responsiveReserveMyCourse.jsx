import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";
import DateComponent from "../../common/date/dateComponent";
import { TagsAccept, TagsNotAccept } from "../tagStatus/tagStatus";

const ResponsiveReserveMyCourse = () => {
  const getReserveMyCourse = async () => {
    const res = await http.get(`/SharePanel/GetMyCoursesReserve`);
    return res;
  };
  const { data } = useQuery({
    queryKey: "reserveMyCoursePanel",
    queryFn: getReserveMyCourse,
  });

  return (
    <div className="w-full h-auto sm:hidden">
      <div className="w-full h-auto flex text-right items-center mt-5 mb-5  ">
        <h2 className="text-lg font-bold dark:text-white">رزرو من</h2>
      </div>

      {data?.map((item) => {
        return (
          <div className="bg-white w-full dark:bg-gray-800">
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex items-center gap-3 dark:border-gray-600">
              <div className="w-28 h-24 mt-8">
                <img
                  src={
                    item.tumbImageAddress == null
                      ? defImg
                      : item.tumbImageAddress
                  }
                  alt=""
                  className="dark:opacity-90"
                />
              </div>
              <div className="flex justify-between w-80">
                <div className="text-xl font-bold line-clamp-1 dark:text-white">
                  {item.courseName}
                </div>
                <div className="text-[#787878] text-sm font-semibold dark:text-gray-300">
                  {data.accept ? (
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

export default ResponsiveReserveMyCourse;
