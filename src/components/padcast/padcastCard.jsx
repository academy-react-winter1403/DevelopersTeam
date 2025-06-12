import React from "react";
import TeacherIcon from "./../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../assets/images/students-stroke-rounded 1.svg";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import { NavLink } from "react-router-dom";
import DateComponent from "../common/date/dateComponent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";
import MiniAudioPlayer from "./MiniAudioPlayer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * idx, duration: 0.6, type: "spring" },
  }),
};

const PadcastCard = ({
  title,
  img,
  teacherName,
  describe,
  Category,
  id,
  isLike,
  isDissLike,
  FileLink,
  allLike,
  allDissLike,
  InsertTime,
}) => {
  const queryClient = useQueryClient();

  const handleLike = () => {
    isLike ? mutateDeleteLike() : mutateLike();
  };

  const handleDisLike = () => {
    if (!isDissLike) mutateDisLike();
  };

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const { mutate: mutateLike } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `https://taha-sepehr.liara.run/podcast/like/AddLike/${id}/40330`
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["podcasts"]);
      toast.success("لایک با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.ErrorMessage || "خطا در لایک");
    },
  });

  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: async () => {
      await axios.delete(
        "https://taha-sepehr.liara.run/podcast/like/deleteMany",
        {
          data: { ids: id },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["podcasts"]);
    },
  });

  const { mutate: mutateDisLike } = useMutation({
    mutationFn: async () => {
      await axios.post(
        `https://taha-sepehr.liara.run/podcast/like/AddDissLike/${id}/40330`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["podcasts"]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.ErrorMessage || "خطا در دیسلایک");
    },
  });

  return (
    <motion.div
      className="w-[600px]  h-[250px] bg-lightGray dark:bg-gray-800 rounded-3xl overflow-hidden flex flex-col sm:flex-row items-stretch"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={1}
    >
      <div className="w-full sm:w-60 h-52 sm:h-auto shrink-0">
        <NavLink>
          <img
            src={img || defaultImg}
            alt="Podcast"
            onError={addDefaultImg}
            className="w-full h-full object-cover rounded-2xl"
          />
        </NavLink>
      </div>

      <div className="flex flex-col justify-between flex-1 p-4 space-y-3">
        <div className="space-y-2">
          <NavLink>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white hover:text-navyBlue dark:hover:text-blue-400 line-clamp-1">
              {title}
            </h2>
          </NavLink>
          <p className="text-[#787878] dark:text-gray-400 text-sm line-clamp-1">
            {describe}
          </p>
        </div>

        <div className="space-y-2 text-sm dark:text-gray-300">
          <div className="flex items-center gap-2">
            <img src={TeacherIcon} className="w-5 h-5 dark:invert" alt="" />
            <span>{teacherName || "بینام"}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={StudentIcon} className="w-5 h-5 dark:invert" alt="" />
            <span>{Category}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={CalenderIcon} className="w-5 h-5 dark:invert" alt="" />
            <DateComponent insertDate={InsertTime} />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleLike}
            >
              <AiOutlineLike
                className={`w-5 h-5 ${
                  isLike
                    ? "text-blue-600 dark:text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              />
              <span>{allLike}</span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleDisLike}
            >
              <AiOutlineDislike
                className={`w-5 h-5 ${
                  isDissLike
                    ? "text-blue-600 dark:text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              />
              <span>{allDissLike}</span>
            </div>
          </div>
          <MiniAudioPlayer src={FileLink} />
        </div>
      </div>
    </motion.div>
  );
};

export default PadcastCard;
