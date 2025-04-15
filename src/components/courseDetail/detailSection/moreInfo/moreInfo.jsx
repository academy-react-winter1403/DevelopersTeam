import React, { useEffect, useState } from "react";
import { TagsA } from "../../../common/course-card/tags/tags";
import { CiStar } from "react-icons/ci";
import CalenderIcon from "./../../../../assets/images/calendar-03-stroke-rounded 1.svg";
import DateComponent from "../../../common/date/dateComponent";
import StudentIcon from "./../../../../assets/images/students-stroke-rounded 1.svg";
import { Button } from "antd";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import http from "./../../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import ReserveModal from "../../reserveModal/reserveModal";
import { FaStar } from "react-icons/fa6";

const MoreInfo = ({ data }) => {
  const queryClient = useQueryClient();
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  const handleReserve = async () => {
    const res = await http.post(`/CourseReserve/ReserveAdd`, {
      courseId: data?.courseId,
    });
  };
  const { mutate: mutateReserve } = useMutation({
    mutationFn: handleReserve,
    onSuccess: () => {
      queryClient.invalidateQueries("courseDetail");
      setIsReserveModalOpen(true);
      // toast.success("دوره با موفقیت رزرو شد");
    },
    onError: () => {
      if (data?.isCourseReseve == 1) {
        toast.error("این دوره رزرو شده است");
      } else toast.error("دوباره امتحان کنید");
    },
  });

  const handleLike = async () => {
    const res = await http.post(
      `/Course/AddCourseLike?CourseId=${data?.courseId}`
    );
    // console.log(res);
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries("courseDetail");
      toast.success("لایک با موفقیت انجام شد");
    },
    onError: () => {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  const handleDelete = async () => {
    const myData = new FormData();
    myData.append("CourseLikeId", data?.userLikeId);
    const res = await http.delete("/Course/DeleteCourseLike", { data: myData });
    // console.log(res);
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries("courseDetail");
      toast.success("ویرایش انجام شد");
    },
    onError: (error) => {
      console.error("Error deleting like:", error);
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(
      `/Course/AddCourseDissLike?CourseId=${data?.courseId}`
    );
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries("courseDetail");
      toast.error("دوره را دوست نداشتید");
    },
    onError: () => {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  const handleFavorite = async () => {
    const res = await http.post(`/Course/AddCourseFavorite`, {
      courseId: data?.courseId,
    });
  };
  const { mutate: mutateFavorite } = useMutation({
    mutationFn: handleFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries("courseDetail");
      toast.success("دوره با موفقیت به علاقه مندی ها اضافه شد");
    },
    onError: () => {
      if (data?.isUserFavorite == true) {
        toast.error("این دوره در لیست علاقه مندی های شما موجود میباشد");
      } else toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  const handleDeleteFav = async () => {
    const myData = new FormData();
    myData.append("CourseFavoriteId", data?.userFavoriteId);
    const res = await http.delete("/Course/DeleteCourseFavorite", {
      data: myData,
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
    console.log(data?.currentUserLike);
  }, [data]);

  return (
    <div className="w-auto h-[430px] border-4 border-borderGray dark:border-gray-700 rounded-3xl lg:sticky top-5 p-3 space-y-5 m-4 lg:m-0 dark:bg-gray-800">
      <div className="bg-[#FFD1CB] dark:bg-red-900/30 w-30 md:min-w-32 h-6 rounded-xl flex justify-center items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-[#FF5454] dark:bg-red-400"></div>
        <h1 className="text-xs md:text-sm text-[#FF5454] dark:text-red-300">
          {data?.courseStatusName}
        </h1>
      </div>
      <div className="w-96 space-y-5">
        <div className="flex">
          <h1 className="text-2xl md:text-4xl font-semibold truncate dark:text-white">
            {data?.title}
          </h1>
          ({data?.currentUserRateNumber}
          <FaStar  className="text-yellow-200" />)
        </div>
        <div className="w-28">
          <TagsA text={data?.courseLevelName} />
        </div>
        <div className="mt-3 flex-none space-y-4">
          <div className="flex items-center gap-3 md:text-xl dark:text-gray-300">
            <img src={StudentIcon} alt="" className="h-6 w-6 dark:invert" />
            <span className="font-semibold">
              {data?.currentRegistrants} / {data?.capacity}
            </span>
            <span className="font-semibold">دانشجو</span>
          </div>
          <div className="flex items-center gap-3 mt-2 md:text-xl dark:text-gray-300">
            <img src={CalenderIcon} alt="" className="h-6 w-6 dark:invert" />
            <span>
              <DateComponent insertDate={data?.startTime} />
            </span>
            <span className="font-semibold text-gray dark:text-gray-400 text-sm">
              (شروع)
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 md:text-xl dark:text-gray-300">
            <img src={CalenderIcon} alt="" className="h-6 w-6 dark:invert" />
            <span>
              <DateComponent insertDate={data?.endTime} />
            </span>
            <span className="font-semibold text-gray dark:text-gray-400 text-sm">
              (پایان)
            </span>
          </div>
          <div className="space-x-2 flex mt-5">
            <span className="text-2xl font-bold dark:text-white">
              {new Intl.NumberFormat("fa-IR").format(data?.cost)}
            </span>
            <span className="text-[#3772FF] dark:text-blue-400 text-sm font-semibold mt-2">
              تومان
            </span>
          </div>
        </div>
      </div>
      <div className="lg:w-[500px] flex justify-between items-center space-x-2">
        <Button
          shape="round"
          type="primary"
          style={{ fontFamily: "yekan", width: "150px", height: "42px" }}
          onClick={() => mutateReserve()}
        >
          {data?.isCourseReseve == 1 ? "رزرو شده" : "رزرو دوره"}
        </Button>
        <ReserveModal
          isModalOpen={isReserveModalOpen}
          setIsModalOpen={setIsReserveModalOpen}
        />
        <div className="flex space-x-3">
          <div
            onClick={() => {
              data?.isUserFavorite ? mutateDeleteFav() : mutateFavorite();
            }}
            className="w-12 h-12 rounded-full border border-borderGray dark:border-gray-600 flex justify-center items-center cursor-pointer"
          >
            {data?.isUserFavorite ? (
              <MdFavorite className="w-5 h-5 text-navyBlue dark:text-blue-400" />
            ) : (
              <MdFavoriteBorder className="w-5 h-5 hover:text-navyBlue dark:hover:text-blue-400" />
            )}
          </div>
          <div className="w-12 h-12 rounded-full border border-borderGray dark:border-gray-600 flex justify-center items-center cursor-pointer">
            <div
              className="flex items-center gap-1"
              onClick={() =>
                data?.currentUserLike == "1" ? mutateDeleteLike() : mutateLike()
              }
            >
              <AiOutlineLike
                className={
                  data?.currentUserLike == "1"
                    ? "w-6 h-6 text-navyBlue dark:text-blue-400"
                    : "w-6 h-6 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border border-borderGray dark:border-gray-600 flex justify-center items-center cursor-pointer">
            <div
              className="flex items-center gap-1"
              onClick={() =>
                data?.currentUserDissLike == "1"
                  ? mutateDisLike()
                  : mutateDisLike()
              }
            >
              <AiOutlineDislike
                className={
                  data?.currentUserDissLike == "1"
                    ? "w-6 h-6 text-navyBlue dark:text-blue-400"
                    : "w-6 h-6 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
