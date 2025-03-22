import React from "react";
import http from "../../../core/services/interceptor";
import CoursesNavbar from "../coursesNavbar/coursesNavbar";
import CardSection from "../cardSection/cardSection";
import FilterSection from "../filterSection/filterSection";
import { useQuery } from "@tanstack/react-query";
import { useQueryGet } from "../../../hooks/useQueryGet/useQueryGet";
import CourseCard from "../../common/course-card/courseCard";

const CoursesSection = () => {
  // const { data } = useQueryGet(
  //   "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0",
  //   "courses"
  // );

  const getList = async () => {
    const res = await http.get(
      "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0"
    );
    return res;
  };

  const { data } = useQuery({
    queryKey: ["courses"],
    queryFn: getList,
  });

  return (
    <div className="grid grid-cols-4 h-auto m-6 border-4 border-borderGray rounded-4xl">
      <div className="col-span-3 ">
        <CoursesNavbar />
        <div className=" flex flex-wrap justify-evenly space-y-5  p-2">
          {data?.courseFilterDtos.map((item, index) => {
            return (
              <CourseCard
                title={item.title}
                img={item.tumbImageAddress}
                describe={item.describe}
                teacherName={item.teacherName}
                statusName={item.statusName}
                student={item.commandCount}
                cost={item.cost}
                likeCount={item.likeCount}
                dissLikeCount={item.dissLikeCount}
              />
            );
          })}
        </div>
      </div>
      <div>
        <FilterSection />
      </div>
    </div>
  );
};

export default CoursesSection;
