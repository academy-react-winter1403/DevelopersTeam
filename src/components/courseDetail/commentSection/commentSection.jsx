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

const CommentSection = ({ data }) => {
  const getCourseComments = async () => {
    const res = await http.get(`/Course/GetCourseCommnets/${data?.courseId}`);
    return res;
  };

  const { data: commentsData } = useQuery({
    queryKey: ["comments"],
    queryFn: getCourseComments,
  });

  return (
    <div className="h-[800px] border-2 border-borderGray rounded-3xl mt-10 flex flex-col items-center p-5 ">
      <h2 className="w-full h-10 bg-blue-500 text-white rounded-3xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <BiCommentDetail />
        نظرات شما
      </h2>

      <CommentCard commentsData={commentsData} />
      <ReplyCard />
    </div>
  );
};

export default CommentSection;
