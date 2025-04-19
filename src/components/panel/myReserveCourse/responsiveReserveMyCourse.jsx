import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";
import DateComponent from "../../common/date/dateComponent";
import { TagsAccept, TagsNotAccept } from "../tagStatus/tagStatus";

<<<<<<< HEAD
const ResponsiveReserveMyCourse = ({showDrawer}) => {
  
  const getReserveMyCourse = async () => {
    const res = await http.get(`/SharePanel/GetMyCoursesReserve`);
    return res;
  };
  const { data } = useQuery({
    queryKey: "reserveMyCoursePanel",
    queryFn: getReserveMyCourse,
  });

=======
const ResponsiveReserveMyCourse = ({ showDrawer, data }) => {
>>>>>>> 79769ab6379c0ca09403280cd978208a3f00af78
  return (
    <div className="w-full h-auto sm:hidden">
      <div className="w-full h-auto flex text-right items-center mt-5 mb-5  ">
        <h2 className="text-lg font-bold dark:text-white">رزرو من</h2>
      </div>

      {data?.map((item) => {
        return (
          <div className="bg-white w-full dark:bg-gray-800">
<<<<<<< HEAD
            <div className="border-b-1 border-red-400 w-11/12 mx-auto h-32 flex items-center gap-3 dark:border-gray-600">
              <div className="w-28 h-24 mt-8">
=======
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex items-center gap-3 dark:border-gray-600">
              <div onClick={() => showDrawer(item)} className="w-28 h-24 mt-8">
>>>>>>> 79769ab6379c0ca09403280cd978208a3f00af78
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
<<<<<<< HEAD
                <div className="text-xl font-bold line-clamp-1 dark:text-white " onClick={showDrawer}>
=======
                <div
                  onClick={() => showDrawer(item)}
                  className="text-xl font-bold line-clamp-1 dark:text-white"
                >
>>>>>>> 79769ab6379c0ca09403280cd978208a3f00af78
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
