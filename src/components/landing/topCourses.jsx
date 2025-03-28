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

  data && console.log(data);

  return (
    <div className="w-full mt-20 h-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl  h-10 mx-auto text-center  font-bold">
        محبوب ترین دوره ها
      </h1>
      <h6 className="text-sm sm:text-base md:tex-[20px] font-bold mx-auto text-center  mt-2 h-10 text-[#787878]">
        دوره هایی که بین دانشجویان محبوبیت بالایی داشتند
      </h6>
      <div className="my-4 flex justify-center gap-4 flex-wrap">
        {data?.map((item) => {
          return (
            <CourseCard
              key={item.id}
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
  );
};

export default TopCourses;
