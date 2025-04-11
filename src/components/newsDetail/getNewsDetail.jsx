import React, { useEffect} from "react";
import http from "../../core/services/interceptor";
import { useParams } from "react-router-dom";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import DateComponent from "../../components/common/date/dateComponent";
import defaultImg from "./../../assets/images/courses/courseimg.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Rate } from "antd";
import star from "./../../assets/images/courseDetail/star.svg";
import CommentComp from "../common/commentsComponent/commentComp";
import { TagsA } from "../common/course-card/tags/tags";

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
    <div className="my-14 h-auto flex flex-col lg:flex-row flex-wrap justify-around ">
      <div className="w-auto h-[430px] border-4 border-borderGray rounded-3xl xl:sticky top-5 p-3 sm:space-y-5 m-4 lg:m-0 line-clamp-1 overflow-hidden truncate">
        <h2 className="text-lg sm:text-3xl  font-bold sm:p-4  ">{data?.title}</h2>

        <div className="w-50 mt-5 lg:mt-[-8px] mr-2">
          <TagsA text={data?.keyword}  />
        </div>

        <div className="flex gap-2 mt-18 sm:mt-12 lg:mt-4 2xl:mt-14 space-x-2 sm:space-y-2 font-semibold md:text-xl">
          <HiOutlineCalendarDateRange className="w-6 h-6 mr-2 font-semibold" />
          <span>
            <DateComponent insertDate={data?.insertDate} />
          </span>
        </div>

        <div className="flex gap-2 items-center mt-6 sm:mt-1 2xl:mt-[-4px]  font-semibold md:text-xl">
          <IoEyeOutline className="w-6 h-6 mr-2 font-semibold" />
          <span>225</span>
        </div>

        <h2 className="mt-20 sm:mt-12 2xl:mt-12 px-2 sm:px-4  text-[#787878]  font-semibold md:text-xl">منتشر کننده</h2>

        <div className="flex items-center justify-between gap-4 px-2">
          <div className="gap-2 flex items-center">
            <img
              src={
                data?.addUserProfileImage == null
                  ? defaultImg
                  : data?.addUserProfileImage
              }
              alt="not set"
              className="border border-[#E4E4E4] rounded-full w-14 h-14 hidden sm:block"
              onError={addDefaultImg}
            />
            <span className="font-semibold text-md sm:text-lg">
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

            <div className="w-12 h-12 rounded-full border border-borderGray flex justify-center items-center  cursor-pointer">
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

      <div className="lg:w-[719px] h-auto  m-4 lg:m-0 ">
        <div className="w-full  md:h-[428px] rounded-3xl overflow-hidden">
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

        <div className="w-full h-auto p-2 space-y-3 ">
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

        <div className="p-2 mt-10 space-x-4 flex items-center">
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

        <div className="w-full h-auto p-2 space-y-3">
          <h2 className="font-bol text-3xl p-4">نظرات</h2>
          <div className="border border-[#E4E4E4] w-full h-auto p-2 space-y-3 rounded-4xl">
            <CommentComp id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetNewsDetailList;
