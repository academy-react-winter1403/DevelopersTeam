import React from "react";
import { NavLink } from "react-router-dom";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import DateComponent from "../../common/date/dateComponent";
import { TagsA, TagsB } from "../../common/course-card/tags/tags";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../../core/services/interceptor";

const GridCourseCard = ({
  title,
  img,
  teacherName,
  describe,
  student,
  cost,
  likeCount,
  dissLikeCount,
  lastUpdate,
  id,
  statusName,
  levelName,
  userIsLiked,
  userLikedId,
  currentUserDissLike,
  keyMutate,
}) => {
  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };
  const queryClient = useQueryClient();

  const handleLike = async () => {
    const res = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
  };
  const { mutate: mutateLike } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries(keyMutate);
    },
  });
  const handleDelete = async () => {
    const myData = new FormData();
    myData.append("CourseLikeId", userLikedId);
    const res = await http.delete("/Course/DeleteCourseLike", { data: myData });
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(keyMutate);
    },
    onError: (error) => {
      console.error("Error deleting like:", error);
    },
  });
  const handleDisLike = async () => {
    const res = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`);
  };
  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries(keyMutate);
    },
  });

  return (
    <div className="w-full h-72 bg-lightGray dark:bg-gray-800 grid grid-cols-5 overflow-hidden rounded-3xl mr-3 relative">
      <div className="absolute top-2 right-2 sm:flex space-x-2 hidden">
        <TagsA text={statusName} />
        <TagsB text={levelName} />
      </div>
      <div className="col-span-2 bg-red-400 rounded-3xl hidden sm:block overflow-hidden h-72">
        <NavLink to={`/courses/coursedetail/${id}`}>
          <img
            src={img == null ? defaultImg : img}
            alt="not set"
            className="w-full h-full object-cover rounded-3xl"
            onError={addDefaultImg}
          />
        </NavLink>
      </div>

      <div className="col-span-3 m-6 space-y-5">
        <div className="w-full max-w-[300px] overflow-hidden space-y-2">
          <NavLink to={`/courses/coursedetail/${id}`}>
            <h2 className="text-lg font-bold text-[#272727] dark:text-white overflow-hidden text-ellipsis truncate whitespace-nowrap sm:mt-2 hover:text-navyBlue dark:hover:text-blue-400">
              {title}
            </h2>
          </NavLink>
          <h2 className="text-[#787878] dark:text-gray-400 text-sm font-semibold overflow-hidden text-ellipsis truncate whitespace-nowrap">
            {describe}
          </h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-base dark:text-gray-300">
            <img src={TeacherIcon} alt="" className="h-5 w-5 dark:invert" />
            <span>{teacherName}</span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-base dark:text-gray-300">
            <img src={StudentIcon} alt="" className="h-5 w-5 dark:invert" />
            <span className="text-md space-x-2">
              <span>{student}</span>
              <span>دانشجو</span>
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-base dark:text-gray-300">
            <img src={CalenderIcon} alt="" className="h-5 w-5 dark:invert" />
            <span>
              <DateComponent insertDate={lastUpdate} />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-12 gap-4 ml-1 sm:mb-2">
          <div className="flex justify-around items-center gap-10">
            <div
              className="flex items-center gap-1"
              onClick={() => (userIsLiked ? mutateDeleteLike() : mutateLike())}
            >
              <AiOutlineLike
                className={
                  userIsLiked
                    ? "w-5 h-5 text-navyBlue dark:text-blue-400"
                    : "w-5 h-5 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
              <span className="dark:text-gray-300">{likeCount}</span>
            </div>
            <div
              className="flex items-center gap-1"
              onClick={() =>
                currentUserDissLike ? mutateDisLike() : mutateDisLike()
              }
            >
              <AiOutlineDislike
                className={
                  currentUserDissLike
                    ? "w-5 h-5 text-navyBlue dark:text-blue-400"
                    : "w-5 h-5 hover:text-navyBlue dark:hover:text-blue-400"
                }
              />
              <span className="dark:text-gray-300">{dissLikeCount}</span>
            </div>
          </div>
          <div className="space-x-2 flex justify-center items-center">
            <span className="text-lg font-bold dark:text-white">
              {new Intl.NumberFormat("fa-IR").format(cost)}
            </span>
            <span className="text-blue-400 text-md line-clamp-1">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCourseCard;