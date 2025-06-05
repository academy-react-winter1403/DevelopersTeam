import React from "react";
import CourseCard from "../../common/course-card/courseCard";
import { useQueryGet } from "../../../hooks/useQueryGet/useQueryGet";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";

const MoreCourses = ({ id }) => {
  // const { data } = useQueryGet(`/Home/GetCoursesWithPagination`, "courses", []);

  const { data } = useQuery({
    queryKey: ["courses", id],
    queryFn: async () => {
      const res = await http.get(`/Home/GetCoursesWithPagination`);
      return res;
    },
  });

  return (
    <div className="w-full h-auto mb-8">
      <h1 className="font-bold text-2xl sm:text-3xl mt-10 mr-14 mb-8 dark:text-white">
        دوره‌های مشابه
      </h1>
      <div className="flex gap-12 flex-wrap sm:flex-row sm:justify- evenly space-y-5 items-center justify-center">
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
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikedId}
              currentUserDissLike={item.currentUserDissLike}
              keyMutate="courses"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoreCourses;
