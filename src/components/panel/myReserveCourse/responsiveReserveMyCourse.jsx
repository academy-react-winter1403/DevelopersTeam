import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";
import DateComponent from "../../common/date/dateComponent";

const ResponsiveReserveMyCourse = () => {
  const getReserveMyCourse = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCoursesReserve`
    );
    return res;
  };
  const { data } = useQuery({
    queryKey: "reserveMyCoursePanel",
    queryFn: getReserveMyCourse,
  });

  return (
    <div className=" w-full h-auto sm:hidden">
      <div className="w-full h-auto  flex justify-around items-center mt-5 mb-5">
        <h2 className="text-lg font-bold">  رزرو من</h2>
        <h2 className="w-20 h-9 rounded-3xl bg-navyBlue leading-9 pr-6">
          <span className="text-white ">فیلتر</span>
        </h2>
      </div>

      {data?.map((item) => {
        return (
          <div className="bg-white w-full ">
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex items-center gap-3">
              <div className=" w-28 h-24  mt-8">
                <img
                  src={
                    item.tumbImageAddress == null
                      ? defImg
                      : item.tumbImageAddress
                  }
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold line-clamp-1">
                  {item.courseName}
                </div>
                {/* <div className="text-[#787878] text-sm font-semibold">
                  {item.fullName}
                </div>
                <div className="text-[#787878] text-sm font-semibold">
                  {item.paymentStatus}
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsiveReserveMyCourse;
