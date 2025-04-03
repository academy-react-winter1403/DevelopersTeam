import React, { useEffect, useState } from "react";
import http from "../../core/services/interceptor";
import { useParams } from "react-router-dom";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineBookmarkAdd } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import DateComponent from "../../components/common/date/dateComponent";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Rate } from "antd";
import star from "./../../assets/images/courseDetail/star.svg";

const GetNewsDetailList = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const getDetail = async () => {
    const res = await http.get(`/News/${id}`);
    return res?.detailsNewsDto;
  };
  const { data } = useQuery({
    queryKey: "newsDetail",
    queryFn: getDetail,
  });

  const handleRate = async (rateValue) => {
    const res = await http.post(
      `/News/NewsRate?NewsId=${id}&RateNumber=${rateValue}`
    );
    return res;
  };
  const { mutate: mutateRate } = useMutation({
    mutationFn: handleRate,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
    },
  });

  const handleLike = async () => {
    const res = await http.post(`/News/NewsLike/${id}`);
    // return res
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
    },
  });

  const handleDelete = async () => {
    const res = await http.delete("/News/DeleteLikeNews", {
      data: { deleteEntityId: data?.likeId },
    });
    console.log(res);
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(`/News/NewsDissLike/${id}`);
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
    },
  });

  const handleFavorite = async () => {
    const res = await http.post(`/News/AddFavoriteNews?NewsId=${id}`);
  };
  const { mutate: mutateFavorite } = useMutation({
    mutationFn: handleFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries("newsDetail");
      toast.success("دوره با موفقیت به علاقه مندی ها اضافه شد");
    },
    onError: () => {
      if (data?.isUserFavorite == true) {
        toast.error("این دوره در لیست علاقه مندی های شما موجود میباشد");
      } else toast.error("دوباره امتحان کنید");
    },
  });

  const handleDeleteFav = async () => {
    const res = await http.delete("/News/DeleteFavoriteNews", {
      data: { deleteEntityId: data?.currentUserFavoriteId },
    });
    // console.log(res);
  };
  const { mutate: mutateDeleteFav } = useMutation({
    mutationFn: handleDeleteFav,
    onSuccess: () => {
      queryClient.invalidateQueries("courseDetail");
    },
    onError: (error) => {
      console.error("Error deleting like:", error);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };
  return (
    <div className="my-14 h-auto flex flex-col 2xl:flex-row justify-around ">
      <div className="border-4 w-[538px] h-[428px]  border-[#E4E4E4] rounded-4xl sticky top-5">
        <h2 className="text-3xl font-bold p-4  ">{data?.title}</h2>

        <div className="flex gap-2 mt-28 space-x-2 space-y-5">
          <HiOutlineCalendarDateRange className="w-6 h-6 mr-2" />
          <span>
            <DateComponent insertDate={data?.insertDate} />
          </span>
        </div>

        <div className="flex gap-2 items-center ">
          <IoEyeOutline className="w-6 h-6 mr-2" />
          <span>225</span>
        </div>

        <h2 className="mt-12 text-[#787878] p-4 font-semibold">منتشر کننده</h2>

        <div className="flex items-center justify-between gap-2 p-2 ">
          <div className="gap-2 flex items-center">
            <img
              src={
                data?.addUserProfileImage == null
                  ? defaultImg
                  : data?.addUserProfileImage
              }
              alt="not set"
              className="border border-[#E4E4E4] rounded-full w-14 h-14"
              onError={addDefaultImg}
            />
            <span className="font-semibold text-lg">
              {data?.addUserFullName}
            </span>
          </div>
          <div className="flex  justify-evenly gap-2 ">
            <div
              onClick={() => {
                data?.isCurrentUserFavorite
                  ? mutateDeleteFav()
                  : mutateFavorite();
              }}
              className="w-12 h-12 rounded-full border border-borderGray flex justify-center items-center cursor-pointer"
            >
              <MdFavoriteBorder
                className={
                  data?.isCurrentUserFavorite
                    ? "size-6 text-navyBlue"
                    : "size-6 hover:text-navyBlue"
                }
              />
            </div>

            <div className="w-12 h-12 rounded-full border border-borderGray flex justify-center items-center cursor-pointer">
              <div
                className="flex items-center gap-1"
                onClick={() =>
                  data?.currentUserIsLike ? mutateDeleteLike() : mutateLike()
                }
              >
                <AiOutlineLike
                  className={
                    data?.currentUserIsLike
                      ? "w-6 h-6 text-navyBlue"
                      : "w-6 h-6 hover:text-navyBlue"
                  }
                />
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border border-borderGray flex justify-center items-center cursor-pointer">
              <div
                className="flex items-center gap-1"
                onClick={() =>
                  data?.currentUserDissLike ? mutateDisLike() : mutateDisLike()
                }
              >
                <AiOutlineDislike
                  className={
                    data?.currentUserIsDissLike
                      ? "w-6 h-6 text-navyBlue"
                      : "w-6 h-6 hover:text-navyBlue"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[750px] border border-red-400 h-auto">
        <div className="w-[738px] h-[428px] border border-[#E4E4E4] rounded-4xl">
          <img
            src={
              data?.addUserProfileImage == null
                ? defaultImg
                : data?.addUserProfileImage
            }
            alt="not set"
            className="w-full"
            onError={addDefaultImg}
          />
        </div>

        <div className="w-[738px] border-2 border-blue-500 h-auto ">
          <h2 className="mt-5 p-5">
            {data?.miniDescribe} لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </h2>
        </div>

        <div className="p-2 mt-10 space-x-4 flex items-center ">
          <img src={star} alt="" />
          <span>امتیاز بدید</span>
          <span>({data?.currentRate})</span>{" "}
          <Rate
            allowHalf
            value={
              !data?.currentUserSetRate
                ? data?.currentRate
                : data?.currentUserRateNumber
            }
            onChange={(rateValue) => mutateRate(rateValue)}
          />
        </div>

        <div className="border w-[750px] h-auto mt-20">
          <h2 className="font-bol text-3xl p-4">نظرات</h2>
          <div className="border border-[#E4E4E4] w-[738px] h-96 rounded-4xl"></div>
        </div>
      </div>
    </div>
  );
};

export default GetNewsDetailList;
