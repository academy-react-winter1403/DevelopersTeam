import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import CommentCard from "./commentCard/commentCard";
import ReplyCard from "./replyCard/replyCard";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { h1 } from "framer-motion/client";

const CommentSection = ({ id }) => {
  const getCourseComments = async () => {
    const res = await http.get(`/Course/GetCourseCommnets/${id}`);
    return res;
  };

  const { data: commentsData } = useQuery({
    queryKey: ["comments"],
    queryFn: getCourseComments,
  });

  return (
    <div className=" h-auto border-2 border-borderGray rounded-3xl mt-10 flex flex-col items-center p-5 ">
      <h2 className="w-full h-10 bg-blue-500 text-white rounded-3xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <BiCommentDetail />
        نظرات شما
      </h2>
      {commentsData == "" ? (
        <h1 className="text-gray text-sm my-5">نظری ثبت نشده</h1>
      ) : (
        commentsData?.map((item, index) => {
          return (
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
          );
        })
      )}
      {/* <ReplyCard id={id} /> */}
    </div>
  );
};

export default CommentSection;
