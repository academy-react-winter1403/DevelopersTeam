import React from "react";
import http from "./../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import ReplyCard from "../replyCard/replyCard";
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
    <div>
      {data?.map((item) => (
        <ReplyCard data={item} />
      ))}
    </div>
  );
};

export default Provider;
