import React from "react";
import { useQuery } from "@tanstack/react-query";
import http from "../../core/services/interceptor";
import CourseCard from "../common/course-card/courseCard";
import FadeInSection from "../common/FadeInSection/FadeInSection";
import { useTranslation } from "react-i18next";

const TopCourses = () => {
  const { t } = useTranslation();

  const { data } = useQuery({
    queryKey: ["topCourses"],
    queryFn: async () => {
      const res = await http.get("/Home/GetCoursesTop?Count=4");
      return res;
    },
  });

  return (
    <div className="w-full mt-20 h-auto">
      <FadeInSection>
        <h1 className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl dark:text-white">
          {t("the most popular courses")}
        </h1>
      </FadeInSection>

      <FadeInSection>
        <h6 className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] dark:text-gray-400 xl:text-[15px]">
          {t("Courses that were very popular among students")}
        </h6>
      </FadeInSection>

      <div className="my-4 flex justify-center gap-4 flex-wrap">
        {data?.map((item, index) => (
          <FadeInSection key={index}>
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
              id={item.courseId}
              levelName={item.levelName}
              lastUpdate={item.lastUpdate}
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikeId}
              currentUserDissLike={item.userIsDissLiked}
              keyMutate="topCourses"
              isTopCourse={true}
            />
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
