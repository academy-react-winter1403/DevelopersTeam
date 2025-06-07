import React from "react";
import TeacherIcon from "./../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../assets/images/students-stroke-rounded 1.svg";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import { NavLink } from "react-router-dom";
import DateComponent from "./../common/date/dateComponent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { TagsA, TagsB } from "../common/course-card/tags/tags";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * idx, duration: 0.6, type: "spring" },
  }),
};
const scaleImg = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.13, duration: 0.6, type: "spring" },
  },
};

const PadcastCard = ({
  title,
  img,
  teacherName,
  statusName,
  describe,
  student,
  likeCount,
  dissLikeCount,
  id,
  lastUpdate,
  levelName,
  userIsLiked,
  userLikedId,
  currentUserDissLike,
  keyMutate,

  //   isSelected,
  //   onToggleCompare,
}) => {
  const queryClient = useQueryClient();

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const handleLike = async () => {};
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries([keyMutate]);
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError: (error) => {
      console.log(error);
      if (error.status == 401) {
        toast.error("ابتدا وارد حساب کاربری شوید");
      } else {
        toast.error("مشکلی پیش آمده");
      }
    },
  });

  const handleDelete = async () => {};
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries([keyMutate]);
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.ErrorMessage || "خطا در انجام عملیات");
    },
  });

  const handleDisLike = async () => {};
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries([keyMutate]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.ErrorMessage || "خطا در انجام عملیات");
    },
  });

  return (
    <motion.div
      className="w-[310px] h-[450px] bg-lightGray dark:bg-gray-800 flex flex-col overflow-hidden rounded-3xl relative"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={1}
    >
      <motion.div
        className="absolute top-2 right-2 flex space-x-2"
        variants={fadeUp}
        custom={2}
      >
        <TagsA text={statusName} />
        <TagsB text={levelName} />
      </motion.div>
      <motion.div
        className="w-full h-[200px] rounded-3xl"
        variants={scaleImg}
        initial="hidden"
        animate="visible"
      >
        <NavLink to={`/courses/coursedetail/${id}`}>
          <img
            src={img == null ? defaultImg : img}
            alt="not set"
            className="w-[310px] h-[200px] object-cover rounded-3xl blur-[#54545417] shadow-md"
            onError={addDefaultImg}
          />
        </NavLink>
      </motion.div>
      <div className="w-full h-full px-3 flex flex-col mt-3">
        <motion.div className="grow" variants={fadeUp} custom={3}>
          <NavLink to={`/courses/coursedetail/${id}`}>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white line-clamp-1 hover:text-navyBlue dark:hover:text-blue-400 cursor-pointer">
              {title}
            </h2>
          </NavLink>
          <p className="text-[#787878] dark:text-gray-400 text-sm mt-2 line-clamp-2">
            {describe}
          </p>
        </motion.div>
        <motion.div
          className="mt-3 flex-none space-y-3"
          variants={fadeUp}
          custom={4}
        >
          <div className="flex items-center gap-3 text-sm dark:text-gray-300">
            <img src={TeacherIcon} alt="" className="h-5 w-5 dark:invert" />
            <span>{teacherName || "بینام"}</span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm dark:text-gray-300">
            <img src={StudentIcon} alt="" className="h-5 w-5 dark:invert" />
            <span className="text-md space-x-2">
              <span>{student}</span>
              <span>دانشجو</span>
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm dark:text-gray-300">
            <img src={CalenderIcon} alt="" className="h-5 w-5 dark:invert" />
            <DateComponent insertDate={lastUpdate} />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-none justify-between my-3"
          variants={fadeUp}
          custom={5}
        >
          <div className="flex gap-2">
            <div
              className="flex items-center gap-1"
              onClick={() => (userIsLiked ? mutateDeleteLike() : mutateLike())}
            >
              <AiOutlineLike
                className={
                  userIsLiked
                    ? "w-5 h-5 text-navyBlue dark:text-blue-400"
                    : "w-5 h-5 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
              <span className="dark:text-gray-300">{likeCount}</span>
            </div>
            <div
              className="flex items-center gap-1"
              onClick={() =>
                currentUserDissLike ? mutateDisLike() : mutateDisLike()
              }
            >
              <AiOutlineDislike
                className={
                  currentUserDissLike
                    ? "w-5 h-5 text-navyBlue dark:text-blue-400"
                    : "w-5 h-5 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
              <span className="dark:text-gray-300">{dissLikeCount}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PadcastCard;
