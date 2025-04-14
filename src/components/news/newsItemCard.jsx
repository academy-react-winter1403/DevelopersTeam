import React from "react";
import QuillWrite from "./../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../assets/images/view-stroke-rounded (1) 1.svg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import {  useNavigate } from "react-router-dom";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import DateComponent from "../../components/common/date/dateComponent";
import http from "../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
}) => {
  console.log(keyword);
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
    // return res
  };
  const { mutate } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries("news-list");
    },
  });

  const handleDelete = async () => {
    const res = await http.delete("/News/DeleteLikeNews", {
      data: { deleteEntityId: likeId },
    });
    console.log(res);
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries("news-list");
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(`/News/NewsDissLike/${id}`);
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries("news-list");
    },
  });

  return (
    <div className="my-5 rounded-2xl relative 2xl:h-72 bg-lightGray dark:bg-gray-800 w-full">
      <div className="absolute z-30 text-white bg-[#5A7EFF] dark:bg-blue-600 px-3 py-1 rounded-4xl top-4 right-3 hidden md:block">
        {keyword}
      </div>
      <div className="flex 2xl:gap-5 relative justify-between">
        <div className="fle x-shrink-0 relative" onClick={handleNavigation}>
          <img
            src={addUserProfileImage == null ? defaultImg : addUserProfileImage}
            alt="Profile"
            className="2xl:w-[430px] hidden w-4/5 h-full md:h-72 bg-black object-contain rounded-3xl sm:block"
            onError={addDefaultImg}
          />
        </div>

        <div className="lg:mt-2 md:w-4/5 w-full mt-0 md:mt-3">
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
            <img
              src={ViewStroke}
              alt="View Stroke"
              className="md:h-5 md:w-5 w-4 h-4 dark:invert"
            />
            <span className="text-sm font-bold text-[#272727] dark:text-gray-300">225</span>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <MdOutlineDateRange className="md:h-5 md:w-5 w-4 h-4 dark:text-gray-400" />
            <span className="dark:text-gray-300">
              <DateComponent insertDate={insertDate} />
            </span>
          </div>
          <div className="flex justify-between items-center mt-6 gap-4 ml-1 sm:mb-2">
            <div className="flex justify-around gap-10">
              {currentUserIsLike ? (
                <div className="flex items-center justify-between gap-1">
                  <AiOutlineLike
                    className="md:h-5 md:w-5 w-4 h-4 text-navyBlue dark:text-blue-400"
                    onClick={() => mutateDeleteLike()}
                  />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentLikeCount}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-1">
                  <AiOutlineLike
                    className="md:h-5 md:w-5 w-4 h-4 dark:text-gray-400"
                    onClick={mutate}
                  />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentLikeCount}
                  </span>
                </div>
              )}

              {currentUserIsDissLike ? (
                <div className="flex gap-1">
                  <AiOutlineDislike className="md:h-5 md:w-5 w-4 h-4 text-navyBlue dark:text-blue-400" />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentDissLikeCount}
                  </span>
                </div>
              ) : (
                <div className="flex gap-1" onClick={() => mutateDisLike()}>
                  <AiOutlineDislike className="md:h-5 md:w-5 w-4 h-4 dark:text-gray-400" />
                  <span className="text-sm font-bold text-[#272727] dark:text-gray-300">
                    {currentDissLikeCount}
                  </span>
                </div>
              )}
            </div>

            <div className="md:px-2">
              <h2
                onClick={handleNavigation}
                className="bg-navyBlue dark:bg-blue-600 rounded-xl text-white lg:h-9 md:rounded-full md:px-4 py-1 text-sm px-1 leading-6 line-clamp-1 text-center cursor-pointer"
              >
                بیشتر بخوانید
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItemCard;
