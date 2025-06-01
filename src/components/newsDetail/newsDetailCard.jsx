import React from "react";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import AddUserNewsComment from "../common/commentsComponent/addUserNewsComment";
import CommentComp from "../common/commentsComponent/commentComp";
import Editor from "../common/Editor/editor";
import star from "./../../assets/images/courseDetail/star.svg";
import { Rate } from "antd";
import RightPart from "./rightPart";
import UserAddComment from "../courseDetail/commentSection/userAddComment/userAddComment";

const NewsDetailCard = ({
  mutateRate,
  mutateLike,
  mutateDeleteLike,
  mutateDisLike,
  mutateFavorite,
  mutateDeleteFav,
  data,
  id,
}) => {
  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <div className="my-14 h-auto flex flex-col lg:flex-row  sm:justify-around ">
      <RightPart
        mutateRate={mutateRate}
        mutateLike={mutateLike}
        mutateDeleteLike={mutateDeleteLike}
        mutateDisLike={mutateDisLike}
        mutateFavorite={mutateFavorite}
        mutateDeleteFav={mutateDeleteFav}
        data={data}
        id={id}
      />

      <div className="lg:w-[719px] h-auto m-4 lg:m-0 dark:text-white">
        <div className="w-full md:h-[428px] rounded-3xl overflow-hidden">
          <img
            src={
              data?.addUserProfileImage == null
                ? defaultImg
                : data?.addUserProfileImage
            }
            alt="not set"
            className="w-full h-full"
            onError={addDefaultImg}
          />
        </div>

        <div className="w-full mt-3 h-auto p-2 space-y-3">
          {/* <h2 className="mt-5 p-5 dark:text-gray-300">{data?.describe}</h2> */}
          {data?.describe && <Editor describe={data?.describe} />}
        </div>

        <div className="p-2 mt-10 space-x-4 flex items-center dark:text-white">
          <img src={star} alt="" className="dark:invert" />
          <span>امتیاز بدید</span>
          <span>({data?.currentRate})</span>
          <Rate
            allowHalf
            value={
              !data?.currentUserSetRate
                ? data?.currentRate
                : data?.currentUserRateNumber
            }
            onChange={(rateValue) => mutateRate(rateValue)}
            className="dark:[&_.ant-rate-star]:text-yellow-400"
          />
        </div>
        <UserAddComment id={id} isNews={true} />
        <div className="w-full h-auto py-2 space-y-3">
          <div className="border border-[#E4E4E4] dark:border-gray-700 w-full h-auto p-2 space-y-3 rounded-4xl dark:bg-gray-800">
            <CommentComp id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailCard;
