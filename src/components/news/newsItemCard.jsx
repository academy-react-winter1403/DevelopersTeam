import React from "react";
import QuillWrite from "./../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../assets/images/view-stroke-rounded (1) 1.svg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import DateComponent from "../../components/common/date/dateComponent";
import http from "../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
};

const NewsItemCard = ({
  addUserProfileImage,
  title,
  miniDescribe,
  addUserFullName,
  insertDate,
  currentDissLikeCount,
  currentLikeCount,
  id,
  currentUserIsLike,
  currentUserIsDissLike,
  likeId,
  keyword,
  newsCatregoryName,
}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/news/newsdetail/${id}`);
  };

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const handleLike = async () => {
    const res = await http.post(`/News/NewsLike/${id}`);
  };

  const { mutate } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["news-list"]);
    },
  });

  const handleDelete = async () => {
    const res = await http.delete("/News/DeleteLikeNews", {
      data: { deleteEntityId: likeId },
    });
  };

  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(["news-list"]);
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(`/News/NewsDissLike/${id}`);
  };

  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["news-list"]);
    },
  });

  return (
    <motion.div
      className="my-5 rounded-2xl relative h-full bg-lightGray dark:bg-gray-800 w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.div
        className="absolute z-30 text-white bg-[#5A7EFF] dark:bg-blue-600 px-3 py-1 rounded-4xl 2xl:top-4 md:top-8 right-3 hidden md:block"
        variants={fadeIn}
      >
        {newsCatregoryName}
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center items-center 2xl:gap-5 relative sm:justify-between">
        <motion.div
          className="relative w-fit sm:h-72 rounded-2xl bg-black cursor-pointer"
          variants={fadeIn}
          onClick={handleNavigation}
        >
          <img
            src={addUserProfileImage == null ? defaultImg : addUserProfileImage}
            alt="Profile"
            className="w-72 h-full object-contain rounded-2xl"
            onError={addDefaultImg}
          />
        </motion.div>

        <motion.div
          className="lg:mt-2 md:w-4/5 w-full mt-0 md:mt-3 py-2 px-4"
          variants={fadeFromBottom}
        >
          <div className="sm:mt-2 w-full max-w-[300px] overflow-hidden">
            <h2 className="text-lg font-bold text-[#272727] dark:text-white overflow-hidden text-ellipsis truncate whitespace-nowrap sm:mt-2">
              {title}
            </h2>
          </div>

          <div className="mt-2 w-full max-w-[300px]">
            <h2 className="text-[#787878] dark:text-gray-400 text-sm font-semibold overflow-hidden text-ellipsis truncate whitespace-nowrap">
              {miniDescribe}
            </h2>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <img
              src={QuillWrite}
              alt="Quill Write"
              className="md:h-5 md:w-5 w-4 h-4 dark:invert"
            />
            <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
              {addUserFullName}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <MdOutlineDateRange className="md:h-5 md:w-5 w-4 h-4 dark:text-gray-400" />
            <span className="dark:text-gray-300">
              <DateComponent insertDate={insertDate} />
            </span>
          </div>

          <motion.div
            className="flex justify-between items-center mt-6 gap-4 ml-1 sm:mb-2"
            variants={fadeFromBottom}
          >
            <div className="flex justify-around gap-10">
              {currentUserIsLike ? (
                <div className="flex items-center justify-between gap-1">
                  <AiOutlineLike
                    className="md:h-5 md:w-5 w-4 h-4 text-navyBlue dark:text-blue-400 cursor-pointer"
                    onClick={() => mutateDeleteLike()}
                  />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentLikeCount}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-1">
                  <AiOutlineLike
                    className="md:h-5 md:w-5 w-4 h-4 dark:text-gray-400 cursor-pointer"
                    onClick={mutate}
                  />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentLikeCount}
                  </span>
                </div>
              )}

              {currentUserIsDissLike ? (
                <div className="flex gap-1">
                  <AiOutlineDislike className="md:h-5 md:w-5 w-4 h-4 text-navyBlue dark:text-blue-400 cursor-pointer" />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentDissLikeCount}
                  </span>
                </div>
              ) : (
                <div className="flex gap-1">
                  <AiOutlineDislike
                    className="md:h-5 md:w-5 w-4 h-4 dark:text-gray-400 cursor-pointer"
                    onClick={() => mutateDisLike()}
                  />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentDissLikeCount}
                  </span>
                </div>
              )}
            </div>

            <motion.div
              className="md:px-2 mb-2 sm:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <h2
                onClick={handleNavigation}
                className="bg-navyBlue dark:bg-blue-600 rounded-xl text-white lg:h-9 md:rounded-full md:px-4 py-1 text-sm px-1 leading-6 line-clamp-1 text-center cursor-pointer"
              >
                بیشتر بخوانید
              </h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsItemCard;
