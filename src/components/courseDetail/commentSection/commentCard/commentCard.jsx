import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { RiTelegram2Line } from "react-icons/ri";
import DateComponent from "../../../common/date/dateComponent";

const CommentCard = ({commentsData}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">
      <div className="mt-5 ">
        <div className="flex gap-2 py-4 ">
          <img src="" alt="" className="border rounded-full w-15 h-15" />
          <div>
            <h2 className="font-semibold"> {commentsData?.author}</h2>
            <h2 className="text-gray"> <DateComponent insertDate={commentsData?.insertDate} /> </h2>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-semibold">دوره خیلی خوبی بود</h1>
        <p>
          هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و
          تونستم به مقدهم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث
          عقب نموندم و تونستم به مقد
        </p>
      </div>
      <div className="flex space-x-10 mt-5 items-center">
        <div className="flex space-x-5">
          <AiOutlineLike className="w-6 h-6" />
          <AiOutlineDislike className="w-6 h-6" />
        </div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-10 rounded-full text-md text-navyBlue text-center border px-3 "
          >
            {isOpen ? "جواب دادن" : "بستن"}
          </button>
        </div>
        <div
          // onClick={}
          className="text-[13px] text-center w-32 h-5 leading-6 flex items-center space-x-2"
        >
          <span className="underline">مشاهده جواب ها</span>
          <IoIosArrowUp />
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
                {/* <Field
                  name="title"
                  placeholder="عنوان نظر خود را بنویسید"
                  className="w-full p-2 border rounded"
                />
                
                <Field
                  name="describe"
                  placeholder="متن نظر خود را بنویسید"
                  className="w-full p-2 border rounded"
                /> */}
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
    </div>
  );
};

export default CommentCard;
