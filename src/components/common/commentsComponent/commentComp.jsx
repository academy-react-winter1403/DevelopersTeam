import axios from "axios";
import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import http from "./../../../core/services/interceptor";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const CommentComp = () => {
  const getComment = async () => {
    const res = await http.get("/News/GetNewsComments?NewsId=Id");
    return res;
  };

  const addComment = async () => {
    const res = await http.post("/News/CreateNewsComment");
    return res;
  };

  const CommentsSection = () => {
    const [newCommentTitle, setNewCommentTitle] = useState("");
    const [newCommentText, setNewCommentText] = useState("");
    const queryClient = useQueryClient();

    const { data } = useQuery(["comments"], getComment);

    const mutation = useMutation(addComment, {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
        setNewCommentTitle("");
        setNewCommentText("");
      },
    });

    const handleAddComment = () => {
      if (!newCommentTitle || !newCommentText) {
        alert("لطفاً عنوان و متن را وارد کنید.");
        return;
      }

      //   const newComment = {
      //     title: newCommentTitle,
      //     text: newCommentText,
      //     author: "کاربر ناشناس",
      //     date: new Date().toISOString(),
      //   };

      //   mutation.mutate(newComment); // درخواست اضافه کردن نظر با استفاده از React Query
      // };

      return (
        <div>
          {/* {data?.map((item,index) =>{
          return(
            title={item.title}
          )
        })} */}

          <h2 className="w-11/12 mx-auto bg-blue-500 text-white rounded-2xl  px-2 py-1 text-[10px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
            <BiCommentDetail />
            نظرات شما
          </h2>

          <div className="border-r-6  border-navyBlue w-full h-auto my-5 ">
            <div className="flex gap-2 p-4 ">
              <img src="" alt="" className="border rounded-full w-15 h-15" />
              <div>
                <h2> مهرداد علیزاده </h2>
                <h2> تاریخ </h2>
              </div>
            </div>

            <h2 className="px-4">
              دوره خیلی خوبی بود واقعا لذت بردم واقعا عالی بود. هم استادش و هم
              کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به
              مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی
              بحر که این دوره رو گذاشتن
            </h2>

            <div className="flex  p-4  gap-5">
              <div className="flex  gap-10  w-2/12">
                <AiOutlineLike className="w-6 h-6" />
                <AiOutlineDislike className="w-6 h-6" />
              </div>

              {/* <button className="w-2/12 h-10 rounded-full text-md text-navyBlue text-center border leading-8 ">
            جواب دادن
          </button> */}

              <div className="w-10/12 h-auto rounded-3xl text-md  border border-navyBlue leading-8 p-2 flex gap-2 ">
                <div className="border border-navyBlue bg-navyBlue w-13 h-13 rounded-full flex justify-center items-center">
                  <RiTelegram2Line className="w-6 h-6" />
                </div>

                <div className="border border-[#F1F1F1] w-13 h-13 rounded-full flex justify-center items-center">
                  <CiFaceSmile className="w-6 h-6 text-navyBlue" />
                </div>

                <div className="mx-auto w-9/12 ">
                  <input
                    placeholder="عنوان نظر خود را بنویسید"
                    className="border-b-2 mt-3 h-auto border-b-lightGray mx-auto w-11/12 "
                  ></input>
                  <input
                    placeholder="متن نظر خود را بنویسید"
                    className=" h-auto my-3 mx-auto w-11/12 "
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  };
};

export default CommentComp;
