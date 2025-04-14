import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";
import DateComponent from "../../common/date/dateComponent";

const ResponsivFavCourse = () => {
  const getFavCourse = async () => {
    const res = await http.get(`/SharePanel/GetMyFavoriteCourses`);
    return res;
  };
  const { data } = useQuery({
    queryKey: "favCoursePanel",
    queryFn: getFavCourse,
  });

  return (
    <div className=" w-full h-auto sm:hidden">
      <div className="w-full h-auto  flex justify-around items-center mt-5 mb-5">
        <h2 className="text-lg font-bold">علاقه مندی دوره</h2>
        <h2 className="w-20 h-9 rounded-3xl bg-navyBlue leading-9 pr-6">
          <span className="text-white ">فیلتر</span>
        </h2>
      </div>

      {data?.favoriteCourseDto.map((item) => {
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
                  {item.courseTitle}
                </div>
                <div className="text-[#787878] text-sm font-semibold">
                  {item.teacheName}
                </div>
                <div className="text-[#787878] text-sm font-semibold">
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
