import React from "react";
import QuillWrite from "./../../../assets/images/quill-write-02-stroke-rounded 2.svg";
import ViewStroke from "./../../../assets/images/view-stroke-rounded (1) 1.svg";
import { NavLink } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { TagsA } from "../course-card/tags/tags";
import toast from "react-hot-toast";

const NewsCard = ({
  addUserProfileImage,
  title,
  miniDescribe,
  addUserFullName,
  currentUserIsLike,
  currentLikeCount,
  currentUserIsDissLike,
  currentDissLikeCount,
  id,
  currentUserDissLike,
  likeId,
  keyword,
}) => {
  const queryClient = useQueryClient();

  const handleLike = async () => {
    const res = await http.post(`/News/NewsLike/${id}`);
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["topNews"]);
      toast.success("عملیات با موفقیت انجام شد ")
    },
    onError:(error) => {
      toast.error(error?.response.data.ErrorMessage)
    }
  });

  const handleDelete = async () => {
    const res = await http.delete("/News/DeleteLikeNews", {
      data: { deleteEntityId: likeId },
    });
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(["topNews"]);
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(`/News/NewsDissLike/${id}`);
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["topNews"]);
    },
  });

  return (
    <div className="flex flex-col border-2 border-gray-50 dark:border-gray-700 rounded-2xl bg-lightGray dark:bg-gray-800 p-4 w-full sm:max-w-[300px] md:max-w-[300px] mx-auto">
      <div className="h-40 w-full rounded-2xl overflow-hidden relative">
        <div className="absolute top-2 right-2 flex space-x-2">
          <TagsA text={keyword} />
        </div>

        <NavLink to={`/news/newsdetail/${id}`}>
          <img
            src={addUserProfileImage}
            alt=""
            className="h-full w-full object-cover mx-auto"
          />
        </NavLink>
      </div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold text-[#272727] dark:text-white overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </h2>
      </div>
      <div className="mt-2">
        <h2 className="text-[#787878] dark:text-gray-400 text-[10px] overflow-hidden text-ellipsis whitespace-nowrap">
          {miniDescribe}
        </h2>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <img src={QuillWrite} alt="Quill Write" className="h-4 w-5 dark:invert" />
        <span className="text-[12px] text-[#272727] dark:text-gray-300">{addUserFullName}</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <img src={ViewStroke} alt="View Stroke" className="h-4 w-5 dark:invert" />
        <span className="text-[12px] text-[#272727] dark:text-gray-300">225</span>
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="flex justify-baseline mr-[-10px]">
          <div
            className="flex justify-center items-center m-2 gap-1"
            onClick={() =>
              currentUserIsLike ? mutateDeleteLike() : mutateLike()
            }
          >
            <AiOutlineLike
              className={
                currentUserIsLike
                  ? "w-6 h-6 text-navyBlue dark:text-blue-400"
                  : "w-6 h-6 hover:text-navyBlue dark:hover:text-blue-400"
              }
            />
            <span className="text-sm text-[#272727] dark:text-gray-300">{currentLikeCount}</span>
          </div>

          <div
            className="flex items-center gap-1"
            onClick={() =>
              currentUserDissLike ? mutateDisLike() : mutateDisLike()
            }
          >
            <AiOutlineDislike
              className={
                currentUserIsDissLike
                  ? "w-6 h-6 text-navyBlue dark:text-blue-400"
                  : "w-6 h-6 hover:text-navyBlue dark:hover:text-blue-400"
              }
            />
            <span className="text-sm text-[#272727] dark:text-gray-300">
              {currentDissLikeCount}
            </span>
          </div>
        </div>

        <div className="">
          <NavLink to={`/news/newsdetail/${id}`}>
            <h2 className="bg-blue-500 text-white rounded-2xl px-2 py-1 text-[10px] lg:text-[12px] text-center cursor-pointer">
              بیشتر بخوانید
            </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;