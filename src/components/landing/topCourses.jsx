import { useQuery } from "@tanstack/react-query";
import http from "../../core/services/interceptor";
import CourseCard from "../common/course-card/courseCard";

const TopCourses = () => {
  const getTopCourses = async () => {
    const res = await http.get("/Home/GetCoursesTop?Count=4");
    return res;
  };

  const { data } = useQuery({
    queryKey: "topCourses",
    queryFn: getTopCourses,
  });

  // data && console.log(data);

  return (
    <div className="w-full mt-20 h-auto">
      <h1 className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl">
        محبوب ترین دوره ها
      </h1>
      <h6 className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] xl:text-[15px]">
        دوره هایی که بین دانشجویان محبوبیت بالایی داشتند
      </h6>
      <div className="my-4 flex justify-center gap-4 flex-wrap">
        {data?.map((item, index) => {
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
              id={item.courseId}
              levelName={item.levelName}
              lastUpdate={item.lastUpdate}
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikeId}
              currentUserDissLike={item.userIsDissLiked}
              keyMutate="topCourses"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopCourses;
