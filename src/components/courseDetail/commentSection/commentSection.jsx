import { Spin } from "antd";
import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import CommentCard from "./commentCard/commentCard";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { BiCommentAdd } from "react-icons/bi";

const CommentSection = ({ id }) => {
  const [visibleComments, setVisibleComments] = useState(5);

  const getCourseComments = async () => {
    const res = await http.get(`/Course/GetCourseCommnets/${id}`);
    return res;
  };

  const { data: commentsData, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: getCourseComments,
  });

  const loadMoreComments = () => {
    setVisibleComments((prev) => prev + 10);
  };

  return (
    <div className="h-auto border-2 border-borderGray rounded-3xl mt-10 flex flex-col items-center p-5 space-y-5">
      <h2 className="w-full h-10 bg-[#3772FF] text-white rounded-3xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <BiCommentDetail />
        نظرات شما
      </h2>

      {isLoading ? (
        <Spin size="large" className="mt-20" />
      ) : commentsData?.length === 0 ? (
        <h1 className="text-gray text-sm my-5">نظری ثبت نشده</h1>
      ) : (
        commentsData
          ?.slice(0, visibleComments)
          .map((item, index) => (
            <CommentCard
              key={index}
              author={item?.author}
              insertDate={item?.insertDate}
              title={item?.title}
              describe={item?.describe}
              pictureAddress={item?.pictureAddress}
              courseId={item?.courseId}
              commentId={item?.id}
              likeCount={item?.likeCount}
              disslikeCount={item?.disslikeCount}
              currentUserEmotion={item?.currentUserEmotion}
            />
          ))
      )}

      {commentsData?.length > visibleComments && (
        <h2
          onClick={loadMoreComments}
          className="w-full h-10 bg-[#E4E4E4] text-[#272727] rounded-3xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2 mt-3"
        >
          <BiCommentAdd />
          نمایش بیشتر
        </h2>
      )}
    </div>
  );
};

export default CommentSection;
