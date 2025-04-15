import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DateComponent from "../../../common/date/dateComponent";
import defaultImg from "./../../../../assets/images/courses/defImgComment.jpg";
import Provider from "../provider/provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import toast from "react-hot-toast";
import SendTextBox from "./sendTextBox/sendTextBox";

const CommentCard = ({
  author,
  insertDate,
  isReplay,
  title,
  describe,
  pictureAddress,
  courseId,
  commentId,
  likeCount,
  disslikeCount,
  currentUserEmotion,
  currentUserLikeId,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openAnswer, setOpenAnswer] = useState(false);
  const queryClient = useQueryClient();
  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
    e.target.onerror = null;
  };

  const handleLike = async () => {
    const res = await http.post(
      `/Course/AddCourseCommentLike?CourseCommandId=${commentId}`
    );
    return res;
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
      toast.success("نظرتان با موفقیت ثبت شد");
    },
    onError: () => {
      // toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(
      `/Course/AddCourseCommentDissLike?CourseCommandId=${commentId}`
    );
    return res;
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const handleDeleteLike = async () => {
    const res = await http.delete(
      `/Course/DeleteCourseCommentLike?CourseCommandId=${commentId}`
    );
    return res;
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDeleteLike,
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: (error) => {
      console.log("diss", error);
    },
  });

  return (
    <div className={`w-full flex mt-2 ${isReplay && "space-x-3 "}`}>
      {isReplay && (
        <div className="w-2 h-52 bg-navyBlue dark:bg-blue-600 rounded-sm"></div>
      )}
      <div className="w-full">
        <div className="mt-2">
          <div className="flex gap-2 py-4">
            <img
              src={pictureAddress || defaultImg}
              onError={(e) => addDefaultImg(e)}
              alt=""
              className="rounded-full w-10 h-10 border border-borderGray dark:border-gray-600"
            />
            <div>
              <h2 className="font-semibold text-sm sm:text-base dark:text-white">
                {author}
              </h2>
              <h2 className="text-gray dark:text-gray-400 text-xs sm:text-sm">
                <DateComponent insertDate={insertDate} />
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-2 overflow-hidden">
          <h1 className="font-semibold text-sm sm:text-base dark:text-white">
            {title}
          </h1>
          <p className="text-xs sm:text-sm dark:text-gray-300">{describe}</p>
        </div>

        <div className="flex flex-wrap gap-3 sm:space-x-5 mt-3 sm:mt-5 items-center">
          <div className="flex space-x-3 sm:space-x-5">
            <AiOutlineLike
              onClick={() =>
                currentUserEmotion === "LIKED"
                  ? mutateDeleteLike()
                  : mutateLike()
              }
              className={
                currentUserEmotion === "LIKED"
                  ? "w-5 h-5 sm:w-6 sm:h-6 text-navyBlue dark:text-blue-400 cursor-pointer"
                  : "w-5 h-5 sm:w-6 sm:h-6 cursor-pointer dark:text-gray-400"
              }
            />
            <span className="text-xs sm:text-sm dark:text-gray-300">
              {likeCount}
            </span>
            <AiOutlineDislike
              onClick={() => mutateDisLike()}
              className={
                currentUserEmotion === "DISSLIKED"
                  ? "w-5 h-5 sm:w-6 sm:h-6 text-navyBlue dark:text-blue-400 cursor-pointer"
                  : "w-5 h-5 sm:w-6 sm:h-6 cursor-pointer dark:text-gray-400"
              }
            />
            <span className="text-xs sm:text-sm dark:text-gray-300">
              {disslikeCount}
            </span>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 sm:h-10 rounded-full text-xs px-2 sm:px-3 border border-navyBlue dark:border-blue-400 text-navyBlue dark:text-blue-400"
            >
              {isOpen ? "جواب دادن" : "بستن"}
            </button>
            <div
              onClick={() => setOpenAnswer((e) => !e)}
              className="text-xs flex items-center space-x-1 cursor-pointer dark:text-gray-400"
            >
              <span className="underline">مشاهده جواب ها</span>
              {openAnswer ? (
                <IoIosArrowUp size={14} />
              ) : (
                <IoIosArrowDown size={14} />
              )}
            </div>
          </div>
        </div>

        <SendTextBox
          isOpen={isOpen}
          courseId={courseId}
          commentId={commentId}
        />
        {openAnswer && <Provider courseId={courseId} commentId={commentId} />}
      </div>
    </div>
  );
};

export default CommentCard;
