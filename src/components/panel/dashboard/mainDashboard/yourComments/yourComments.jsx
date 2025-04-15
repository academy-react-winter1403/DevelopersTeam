import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import img from "./../../../../../assets/images/panel/dashboard01.svg";
import http from "./../../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import CommentCard from "../../../../courseDetail/commentSection/commentCard/commentCard";
import { Spin } from "antd";
import Item from "../../../../common/commentsComponent/Item";

const YourComments = ({ userData }) => {
  const getMyComments = async () => {
    const res = await http.get(`/SharePanel/GetMyCoursesComments`);
    return res;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["myComments"],
    queryFn: getMyComments,
  });

  const getMyCommentsNews = async () => {
    const res = await http.get(`/SharePanel/GetMyNewsComments`);
    return res;
  };

  const {
    data: newsData,
    isLoading: newsLoading,
    error: newsError,
  } = useQuery({
    queryKey: ["myCommentsNews"],
    queryFn: getMyCommentsNews,
  });

  if (
    !data?.myCommentsDtos?.length ||
    !newsData?.myNewsCommetDtos?.length ||
    !userData
  ) {
    return (
      <div className="col-span-3 flex flex-col bg-[#FEFDFF] h-72 p-3 rounded-2xl order-2 md:order-1">
        <div className="flex justify-between">
          <span className="font-semibold">نظرات‌ شما</span>
          <span className="flex items-center text-navyBlue space-x-2">
            <span>مشاهده همه</span>
            <FiChevronLeft />
          </span>
        </div>
        <div className="relative">نظری ثبت نشده</div>
      </div>
    );
  }
  const firstComment = data?.myCommentsDtos[0];
  const firstCommentNews = newsData?.myNewsCommetDtos[0];

  return (
    <div className="col-span-3 flex flex-col bg-[#FEFDFF] h-64 sm:h-72 p-3 rounded-2xl order-2 md:order-1">
      <div className="flex justify-between">
        <span className="font-semibold">نظرات‌ شما</span>
        <span className="flex items-center text-navyBlue space-x-2">
          <span>مشاهده همه</span>
          <FiChevronLeft />
        </span>
      </div>
      <div className="relative flex justify-evenly w-full space-x-5 mt-2">
        <div className="w-2 h-full bg-navyBlue rounded-[5px]"></div>
        <div className="w-1/2">
          <h1 className="text-sm text-gray mt-3">دوره ها</h1>
          <CommentCard
            isMyComment={true}
            likeCount={firstComment?.likeCount}
            disslikeCount={firstComment?.dislikeCount}
            key={firstComment?.commentId}
            insertDate={firstComment?.insertDate}
            title={firstComment?.title}
            describe={firstComment?.describe}
            author={userData?.fName}
            pictureAddress={userData?.currentPictureAddress}
            courseId={"723bf735-e0ad-ef11-b6ed-e2b8c6c9e309"}
            commentId={"557037be-1a19-f011-b700-fdb9fe1399fafddddd"}
          />
        </div>
        {/* <div className="border border-borderGray"></div> */}
        <div className="w-2 h-full bg-navyBlue rounded-[5px]"></div>
        <div className="w-1/2 ">
          <h1 className="text-sm text-gray mt-3">اخبار و مقالات</h1>
          <CommentCard
            isMyComment={true}
            likeCount={firstCommentNews?.likeCount}
            disslikeCount={firstCommentNews?.dislikeCount}
            key={firstCommentNews?.commentId}
            insertDate={firstCommentNews?.insertDate}
            title={firstCommentNews?.title}
            describe={firstCommentNews?.describe}
            author={userData?.fName}
            pictureAddress={userData?.currentPictureAddress}
            courseId={"b1b0591e-5df1-ef11-b6fc-d9f4b5c3592e"}
            commentId={"1461509d-3218-f011-b700-fdb9fe1399fa"}
          />
        </div>
      </div>
    </div>
  );
};

export default YourComments;
