import React from "react";
import http from "./../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const CommentLikeDislike = ({data}) => {
  const queryClient = useQueryClient();

  const handleCommentLike = async () => {
    console.log("doneeeeee")
    const res = await http.post(
      `/News/CommentLike/${data.commentId}?LikeType=true`
    );
    // return res
  };



  const { mutate:mutateLike } = useMutation({
    mutationFn: handleCommentLike,
    onSuccess: () => {
      // queryClient.invalidateQueries("commentLike");
      console.log("done")
    },
  });


console.log(data?.currentUserIsLike)
  return (
    <div>
      <div className="flex  gap-10  border-green-400">
        <AiOutlineLike onClick={ ()=> data?.currentUserIsLike ? null: mutateLike() } className={data?.currentUserIsLike ? "w-6 h-6 bg-red-600" : "w-6 h-6 "} />
        <AiOutlineDislike className="w-6 h-6 " />
      </div>
    </div>
  );
};

export default CommentLikeDislike;
