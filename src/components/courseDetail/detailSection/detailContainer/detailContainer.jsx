import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "./../../../../core/services/interceptor";
import defaultImg from "./../../../../assets/images/courses/courseimg.svg";
import { Rate } from "antd";
import star from "./../../../../assets/images/courseDetail/star.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DetailContainer = ({ data }) => {
  const queryClient = useQueryClient();

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const handleRate = async (rateValue) => {
    const res = await http.post(
      `/Course/SetCourseRating?CourseId=${data?.courseId}&RateNumber=${rateValue}`
    );
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: handleRate,
    onSuccess: () => {
      queryClient.invalidateQueries("courseDetail");
    },
  });

  return (
    <div className="lg:w-[719px] h-[1000px]  m-4 md:m-0 ">
      <div className="w-full  md:h-[428px] rounded-3xl overflow-hidden ">
        <img
          src={data?.imageAddress == null ? defaultImg : data?.imageAddress}
          alt="not set"
          className="w-full h-full "
          onError={addDefaultImg}
        />
      </div>
      <div className=" w-full p-2 space-y-5 mt-5">
        <h1 className="text-gray">مدرس</h1>
        <div className="flex space-x-3 items-center">
          <div className="w-14 h-14 bg-gray rounded-full "></div>
          <div>
            <h1 className="font-semibold">{data?.teacherName}</h1>
            <h1 className="text-sm text-gray">سنیور فرانت اند</h1>
          </div>
        </div>
      </div>
      <div className=" w-full h-auto p-2 space-y-3">
        <h1 className="text-gray">توضیحات</h1>
        <div className="space-y-5">
          <h1 className="font-bold text-xl">ری اکت چیست؟</h1>
          <p className="">
            {data?.describe}
            <br />
            ری‌اکت (React) یک کتابخانه جاوا اسکریپت برای ساخت رابط‌های کاربری
            (UI) است که توسط فیس‌بوک توسعه داده شده است. این کتابخانه به
            توسعه‌دهندگان این امکان را می‌دهد که به‌راحتی و به‌صورت مؤثر،
            کامپوننت‌های تعاملی و پیچیده بسازند.{" "}
          </p>
        </div>
      </div>
      <div className="p-2 mt-10 space-x-4 flex items-center">
        <img src={star} alt="" />
        <span>امتیاز بدید</span>
        {data?.currentUserRateNumber}
        <Rate
          allowHalf
          value={data?.currentUserRateNumber}
          onChange={(rateValue) => mutate(rateValue)}
        />
      </div>
    </div>
  );
};

export default DetailContainer;
