import React from "react";
import http from "./../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import CommentCard from "../commentCard/commentCard";

const Provider = ({ courseId, commentId }) => {
  const getReplyComment = async () => {
    const res = await http.get(
      `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
    );
    return res;
  };

  const { data } = useQuery({
    queryKey: ["replyComment"],
    queryFn: getReplyComment,
  });

  return (
    <div className="mr-10">
      <div className="w-2 h-auto bg-navyBlue rounded-sm mr-4"></div>
      {data?.map((item) => (
        <CommentCard
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
      ))}
    </div>
  );
};

export default Provider;
