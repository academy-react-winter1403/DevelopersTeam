import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import Provider from "./Provider";
import { Field, Form, Formik } from "formik";
import instance from "../../../core/services/interceptor";
import DateComp2 from "../date/dateComp2";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";
import CommentLikeDislike from "./commentLikeDislike";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { data } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Item = ({ commentObj }) => {
  // console.log(commentObj);
  const [open, setOpen] = useState(false);
  const [openAnser, setOpenAnser] = useState(false);

  const handleCommentAdd = async (values) => {
    console.log(values);
    const res = await instance.post("/News/CreateNewsReplyComment", values);
    // console.log(res);
    return res.commentObj;
  };

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <div className="border-r-6 border-navyBlue dark:border-blue-600 w-full h-auto my-5 cursor-pointer">
      <div className="flex gap-2 p-4">
        <img
          src={
            commentObj.pictureAddress == null
              ? defaultImg
              : commentObj.pictureAddress
          }
          alt="Profile"
          className="border rounded-full w-15 h-15 dark:border-gray-600"
          onError={addDefaultImg}
        />
        <div>
          <h2 className="mb-4 dark:text-white">{commentObj.autor}</h2>
          <DateComp2 inserDate={commentObj.inserDate} />
        </div>
      </div>

      <h2 className="px-4 dark:text-gray-300">{commentObj.describe}</h2>

      <div className="flex p-4 gap-2">
        <CommentLikeDislike commentObj={commentObj} />
        <button
          onClick={() => setOpenAnser((e) => !e)}
          className="w-1/3 sm:w-2/12 h-10 whitespace-nowrap rounded-full text-xs sm:text-base text-navyBlue dark:text-blue-400 text-center border border-navyBlue dark:border-blue-400 leading-8"
        >
          {!openAnser ? "جواب دادن" : "بستن"}
        </button>

        <div
          onClick={() => setOpen((e) => !e)}
          className="text-[13px] text-center w-32 h-5 leading-6 flex items-center space-x-2 cursor-pointer dark:text-gray-400"
        >
          <span className="underline">مشاهده جواب ها</span>
          {open ? <IoIosArrowUp className="" /> : <IoIosArrowDown />}
        </div>
      </div>
      <div>
        {openAnser && (
          <div className="mt-4 h-auto rounded-3xl text-md border border-navyBlue dark:border-blue-600 leading-8 p-6 flex gap-2 dark:bg-gray-700">
            <div className="border border-navyBlue dark:border-blue-600 bg-navyBlue dark:bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center">
              <RiTelegram2Line className="w-4 h-4 text-white" />
            </div>

            <div className="border border-[#F1F1F1] dark:border-gray-600 w-10 h-10 rounded-full flex justify-center items-center">
              <CiFaceSmile className="w-4 h-4 text-navyBlue dark:text-blue-400" />
            </div>

            <div className="flex-1">
              <Formik
                onSubmit={handleCommentAdd}
                initialValues={{
                  title: "",
                  describe: "",
                  newsId: data.newsId,
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
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                  <TextArea
                    showCount
                    name="describe"
                    maxLength={100}
                    placeholder="نظر خود را بنویسید"
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </div>
      {open && (
        <Provider commentId={commentObj.id} newsId={commentObj.newsId} />
      )}
    </div>
  );
};

export default Item;
