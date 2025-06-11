import { useQuery } from "@tanstack/react-query";
import http from "../../core/services/interceptor";
import CourseCard from "../common/course-card/courseCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.6 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
};
const subtitleVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, type: "spring", delay: 0.3 },
  },
};

const TopCourses = () => {
  const { t, i18n } = useTranslation();

  const getTopCourses = async () => {
    const res = await http.get("/Home/GetCoursesTop?Count=4");
    return res;
  };

  const { data } = useQuery({
    queryKey: ["topCourses"],
    queryFn: getTopCourses,
  });

  return (
    <div className="w-full mt-20 h-auto">
      <motion.h1
        className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl dark:text-white"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {t("the most popular courses")}
      </motion.h1>
      <motion.h6
        className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] dark:text-gray-400 xl:text-[15px]"
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
      >
        {t("Courses that were very popular among students")}
      </motion.h6>
      <motion.div
        className="my-4 flex justify-center gap-4 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px #00000011" }}
          >
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopCourses;
