import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "./../../../../core/services/interceptor";
import defaultImg from "./../../../../assets/images/courses/courseimg.svg";
import { Rate } from "antd";
import star from "./../../../../assets/images/courseDetail/star.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import teacherImg from "./../../../../assets/images/courseDetail/teacherDefault.svg";
import CommentSection from "../../commentSection/commentSection";
import UserAddComment from "../../commentSection/userAddComment/userAddComment";
import toast from "react-hot-toast";

const DetailContainer = ({ data, id }) => {
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
    onError: () => {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  const getTeacherInfo = async () => {
    const res = await http.get(
      `/Home/GetTeacherDetails?TeacherId=${data?.teacherId}`
    );
    return res;
  };

  const { data: teacherData } = useQuery({
    queryKey: ["teacherPic"],
    queryFn: getTeacherInfo,
  });

  return (
    <div className="lg:w-[719px] h-auto m-4 lg:m-0 dark:text-white">
      <div className="w-full md:h-[428px] rounded-3xl overflow-hidden">
        <img
          src={data?.imageAddress == null ? defaultImg : data?.imageAddress}
          alt="not set"
          className="w-full h-full"
          onError={addDefaultImg}
        />
      </div>
      <div className="w-full p-2 space-y-5 mt-5">
        <h1 className="text-gray dark:text-gray-400">مدرس</h1>
        <div className="flex space-x-3 items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={teacherData?.pictureAddress || teacherImg}
              alt=""
              className="w-14 h-14"
            />
          </div>
          <div>
            <h1 className="font-semibold dark:text-white">
              {data?.teacherName}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-2 space-y-3">
        <h1 className="text-gray dark:text-gray-400">توضیحات</h1>
        <div className="space-y-5">
          <h1 className="font-bold text-xl dark:text-white">ری اکت چیست؟</h1>
          <p className="dark:text-gray-300">{data?.describe}</p>
        </div>
      </div>
      <div className="p-2 mt-10 space-x-4 flex items-center dark:text-white">
        <img src={star} alt="" className="dark:invert" />
        <span>امتیاز بدید</span>
        <span>({data?.currentUserRateNumber})</span>
        <Rate
          allowHalf
          value={
            data?.currentUserSetRate
              ? data?.currentUserRateNumber
              : data?.currentRate
          }
          onChange={(rateValue) => mutate(rateValue)}
          className="dark:[&_.ant-rate-star]:border"
        />
      </div>
      <UserAddComment id={id} />
      <CommentSection id={id} />
    </div>
  );
};

export default DetailContainer;
