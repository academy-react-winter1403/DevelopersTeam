import React from "react";
import CourseCard from "../../common/course-card/courseCard";
import { useQueryGet } from "../../../hooks/useQueryGet/useQueryGet";

const MoreCourses = () => {
  const { data } = useQueryGet(`/Home/GetCoursesWithPagination`, "courses", []);
  return (
    <div className="w-full h-auto mb-8">
      <h1 className="font-bold text-3xl  mt-10 mr-14 mb-8 ">دوره‌های مشابه</h1>
      <div className="flex justify-evenly">
        {data?.courseFilterDtos?.slice(1, 5).map((item, index) => {
          return (
            <CourseCard
              key={index}
              title={item.title}
              img={item.tumbImageAddress}
              describe={item.describe}
              teacherName={item.teacherName}
              statusName={item.statusName}
              student={item.commandCount}
              cost={item.cost}
              likeCount={item.likeCount}
              dissLikeCount={item.dissLikeCount}
              lastUpdate={item.lastUpdate}
              id={item.courseId}
              levelName={item.levelName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoreCourses;
