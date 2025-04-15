import React, { useEffect } from "react";
import http from "./../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import CommentCard from "../commentCard/commentCard";
import { Spin } from "antd";

const Provider = ({ courseId, commentId }) => {
  const getReplyComment = async () => {
    const res = await http.get(
      `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
    );
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["replyComment", courseId, commentId],
    queryFn: () => getReplyComment(),
  });

  useEffect(() => {
    // console.log(data);
  }, [data]);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className="mr-3">
      {data?.length === 0 ? (
        <h2 className="text-gray text-sm mt-5">هیچ پاسخی وجود ندارد</h2>
      ) : (
        data?.map((item) => (
          <CommentCard
            isReplay={true}
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
    </div>
  );
};

export default Provider;
