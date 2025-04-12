import React from "react";
import http from "./../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const CommentLikeDislike = ({ commentObj }) => {
  const queryClient = useQueryClient();

  const handleCommentLike = async () => {
    const res = await http.post(
      `/News/CommentLike/${commentObj.id}?LikeType=true`
    );
    console.log(res)
    // return res
  };

  const { mutate: mutateLike } = useMutation({
    mutationFn: handleCommentLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["commentLike"]);
      console.log("done");
    },
  });

  // console.log(commentObj?.currentUserIsLike)
  return (
    <div>
      <div className="flex  gap-10  ">
        {commentObj.currentUserIsLike === false ? (
          <AiOutlineLike className="w-6 h-6" onClick={handleCommentLike} />
        ) : (
          <AiOutlineLike className="w-6 h-6" />
        )}
        <AiOutlineDislike className="w-6 h-6 " />
      </div>
    </div>
  );
};

export default CommentLikeDislike;
