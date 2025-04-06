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

const Item = ({ data }) => {
  //   console.log(data);
  const [open, setOpen] = useState(false);
  const [openAnser, setOpenAnser] = useState(false);

  const handleCommentAdd = async (values) => {
    console.log(values);
    const res = await instance.post("/News/CreateNewsReplyComment", values);
    console.log(res);
    return res.data;
  };

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <div className="border-r-6  border-navyBlue w-full h-auto my-5 ">
      <div className="flex gap-2 p-4 ">
        <img
          src={data.pictureAddress == null ? defaultImg : data.pictureAddress}
          alt="Profile"
          className="border rounded-full w-15 h-15"
          onError={addDefaultImg}
        />
        <div>
          <h2 className="mb-4">{data.autor}</h2>
          <DateComp2 inserDate={data.inserDate} />
        </div>
      </div>

      <h2 className="px-4">{data.describe}</h2>

      <div className="flex  p-4  gap-5 border-2 border-red-500">
        {/* <div className="flex  gap-10  w-2/12">
          <AiOutlineLike className="w-6 h-6" />
          <AiOutlineDislike className="w-6 h-6" />
        </div> */}
        <CommentLikeDislike data={data} />

        <div
          onClick={() => setOpen((e) => !e)}
          className="border-b text-[13px] text-center w-32 h-5 leading-6"
        >
          مشاهده جواب ها
        </div>
        {!openAnser ? (
          <button
            onClick={() => setOpenAnser((e) => !e)}
            className="w-2/12 h-10 rounded-full text-md text-navyBlue text-center border leading-8 "
          >
            جواب دادن
          </button>
        ) : (
          <div className="w-10/12 h-auto rounded-3xl text-md  border border-navyBlue leading-8 p-2 flex gap-2 ">
            <div className="border border-navyBlue bg-navyBlue w-10 h-8 rounded-full flex justify-center items-center">
              <button onClick={handleCommentAdd} type="submit"></button>
              <RiTelegram2Line className="w-4 h-4" />
            </div>

            <div className="border border-[#F1F1F1] w-10 h-8 rounded-full flex justify-center items-center">
              <CiFaceSmile className="w-4 h-4 text-navyBlue" />
            </div>

            <div>
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
                <Form>
                  <Field name="title" placeholder="عنوان نظر خود را بنویسید" />
                  <Field name="describe" placeholder="متن نظر خود را بنویسید" />
                  {/* <button type="submit">ثبت</button> */}
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </div>
      {open && <Provider commentId={data.id} newsId={data.newsId} />}
    </div>
  );
};

export default Item;
