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
import MiniAudioPlayer from "./MiniAudioPlayer ";
import axios from "axios";

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
  describe,
  Category,
  id,
  isLike,
  isDissLike,
  keyMutate,
  FileLink,
  allLike,
  allDissLike,
  InsertTime,

  //   isSelected,
  //   onToggleCompare,
}) => {
  const queryClient = useQueryClient();

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const AudioPlayer = ({ src }) => {
    return (
      <audio controls style={{ width: "100%" }}>
        <source src={src} type="audio/mp3" />
        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
      </audio>
    );
  };

  const handleLike = async () => {
    const res = await axios.post(`https://taha-sepehr.liara.run/podcast/like/AddLike/:id/:userId`);
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["padcastDetail"]);
      toast.success("لایک با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const handleDelete = async () => {
    const res = await axios.delete("https://taha-sepehr.liara.run/podcast/like/deleteMany", {
    //   data: { deleteEntityId: data?.likeId },
    });
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(["padcastDetail"]);
    },
    onError: (error) => {
      console.error("Error deleting like:", error);
    },
  });

  
  const handleDisLike = async () => {
    const res = await axios.post(`https://taha-sepehr.liara.run/podcast/like/AddDissLike/:id/:userId${id}`); /* مشکل داره */
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["padcastDetail"]);
      toast.error("پادکست را دوست نداشتید");
    },
    onError: () => {
      toast.error(error?.response.data.ErrorMessage);
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
        className="w-full h-[200px] rounded-3xl"
        variants={scaleImg}
        initial="hidden"
        animate="visible"
      >
        <NavLink >
          <img
            src={img == null ? defaultImg : img}
            alt="not set"
            className="w-[310px] h-[200px] object-cover rounded-3xl blur-[#54545417] shadow-md mb-3"
            onError={addDefaultImg}
          />
        </NavLink>
      </motion.div>
      <div className="w-full h-full px-3 flex flex-col mt-3">
        <motion.div className="grow" variants={fadeUp} custom={3}>
          <NavLink >
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
              <span>{Category}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm dark:text-gray-300">
            <img src={CalenderIcon} alt="" className="h-5 w-5 dark:invert" />
            <DateComponent insertDate={InsertTime} />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-none justify-between my-3 "
          variants={fadeUp}
          custom={5}
        >
          <div className="flex justify-between gap-2 ">
            <div
              className="flex items-center gap-1"
              onClick={() => (isLike ? mutateDeleteLike() : mutateLike())}
            >
              <AiOutlineLike
                className={
                  isLike
                    ? "w-5 h-5 text-navyBlue dark:text-blue-400"
                    : "w-5 h-5 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
              <span className="dark:text-gray-300">{allLike}</span> 
            </div>
            <div
              className="flex items-center gap-1"
              onClick={() =>
                isDissLike ? mutateDisLike() : mutateDisLike()
              }
            >
              <AiOutlineDislike
                className={
                  isDissLike
                    ? "w-5 h-5 text-navyBlue dark:text-blue-400"
                    : "w-5 h-5 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
              <span className="dark:text-gray-300">{allDissLike}</span> 
            </div>
          </div>
          <div className="flex items-center justify-end">
            <MiniAudioPlayer src={FileLink} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PadcastCard;
