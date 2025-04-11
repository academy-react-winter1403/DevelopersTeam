import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiTelegram2Line } from "react-icons/ri";
import DateComponent from "../../../common/date/dateComponent";
import defaultImg from "./../../../../assets/images/courses/defImgComment.jpg";
import Provider from "../provider/provider";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import toast from "react-hot-toast";

const CommentCard = ({
  author,
  insertDate,
  title,
  describe,
  pictureAddress,
  courseId,
  commentId,
  likeCount,
  disslikeCount,
  currentUserEmotion,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openAnswer, setOpenAnswer] = useState(false);

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const handleLike = async () => {
    const res = await http.post(
      `/Course/AddCourseCommentLike?CourseCommandId=${commentId}`
    );
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(
      `/Course/AddCourseCommentDissLike?CourseCommandId=${commentId}`
    );
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const handleDeleteLike = async () => {
    const res = await http.post(
      `/Course/DeleteCourseCommentLike?CourseCommandId=${commentId}`
    );
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDeleteLike,
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  return (
    <div className="w-full">
      <div className="mt-5 ">
        <div className="flex gap-2 py-4 ">
          <img
            src={pictureAddress == null ? defaultImg : pictureAddress}
            onError={addDefaultImg}
            alt=""
            className=" rounded-full w-15 h-15 border border-borderGray"
          />
          <div>
            <h2 className="font-semibold"> {author}</h2>
            <h2 className="text-gray">
              <DateComponent insertDate={insertDate} />
            </h2>
          </div>
        </div>
      </div>
      <div className="space-y-2 overflow-hidden">
        <h1 className="font-semibold">{title}</h1>
        <p>{describe}</p>
      </div>
      <div className="flex space-x-5 sm:space-x-10 mt-5 items-center">
        <div className="flex space-x-5">
          <AiOutlineLike
            onClick={() =>
              currentUserEmotion === "LIKED" ? mutateDeleteLike() : mutateLike()
            }
            className={
              currentUserEmotion === "LIKED"
                ? "w-6 h-6 text-navyBlue"
                : "w-6 h-6"
            }
          />
          <span>{likeCount}</span>
          <AiOutlineDislike
            onClick={() => handleDisLike()}
            className={currentUserEmotion === "" ? "w-6 h-6 text-navyBlue" : "w-6 h-6"}
          />
          <span> {disslikeCount} </span>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-10 rounded-full text-xs sm:text-base whitespace-nowrap text-navyBlue text-center border px-3 "
          >
            {isOpen ? "جواب دادن" : "بستن"}
          </button>
        </div>
        <div
          onClick={() => setOpenAnswer((e) => !e)}
          className="text-[13px] text-center w-32 h-5 leading-6 flex items-center space-x-2 cursor-pointer"
        >
          <span className="underline">مشاهده جواب ها</span>
          {openAnswer ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {!isOpen && (
        <div className=" mt-4 h-auto rounded-3xl text-md border border-navyBlue leading-8 p-6 flex gap-2">
          <div className="border border-navyBlue bg-navyBlue w-10 h-10 rounded-full flex justify-center items-center">
            <RiTelegram2Line className="w-4 h-4 text-white" />
          </div>

          <div className="border border-[#F1F1F1] w-10 h-10 rounded-full flex justify-center items-center">
            <CiFaceSmile className="w-4 h-4 text-navyBlue" />
          </div>

          <div className="flex-1">
            <Formik
              // onSubmit={handleCommentAdd}
              initialValues={{
                title: "",
                describe: "",
                // newsId: data.newsId,
                userId: 40516,
                userIpAddress: "1.1.1.1",
              }}
            >
              <Form className="space-y-2">
                
                <Input
                  showCount
                  name="title"
                  maxLength={20}
                  placeholder="عنوان نظر خود را بنویسید"
                />
                <TextArea
                  showCount
                  name="describe"
                  maxLength={100}
                  placeholder="نظر خود را بنویسید"
                />
              </Form>
            </Formik>
          </div>
        </div>
      )}
      {openAnswer && <Provider courseId={courseId} commentId={commentId} />}
    </div>
  );
};

export default CommentCard;
