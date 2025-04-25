import React from "react";
import http from "./../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import toast from "react-hot-toast";

const CommentLikeDislike = ({ commentObj }) => {
  const queryClient = useQueryClient();

  const handleCommentLike = async () => {
    const res = await http.post(
      `/News/CommentLike/${commentObj.id}?LikeType=true`
    );
  };

  const { mutate: mutateLike } = useMutation({
    mutationFn: handleCommentLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsComment"]);
      toast.success("عملبات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage);
    },
  });

  const handleCommentDisLike = async () => {
    const res = await http.post(
      `/News/CommentLike/${commentObj.id}?LikeType=false`
    );
  };

  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleCommentDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsComment"]);
      toast.success("عملبات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage);
    },
  });

  const handleCommentLikeDelete = async () => {
    const res = await http.delete(`/News/DeleteCommentLikeNews`, {
      data: { deleteEntityId: commentObj.currentUserLikeId },
    });
  };

  const { mutate: mutateLikeDelete } = useMutation({
    mutationFn: handleCommentLikeDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsComment"]);
      toast.success("عملبات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage);
    },
  });

  // console.log(commentObj);
  return (
    <div>
      <div className="flex  gap-4  ">
        <AiOutlineLike
          className={
            commentObj.currentUserIsLike == false
              ? "w-6 h-6"
              : "w-6 h-6 text-navyBlue"
          }
          onClick={
            commentObj.currentUserIsLike == false
              ? () => mutateLike()
              : () => mutateLikeDelete()
          }
        />
        {commentObj.likeCount}
        <AiOutlineDislike
          className={
            commentObj.currentUserIsDissLike == false
              ? "w-6 h-6 "
              : "w-6 h-6 text-navyBlue"
          }
          onClick={
            commentObj.currentUserIsDissLike == false
              ? () => mutateDisLike()
              : ""
          }
        />
        {commentObj.dissLikeCount}
      </div>
    </div>
  );
};

export default CommentLikeDislike;
