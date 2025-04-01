import React from "react";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";
import { useNavigate } from "react-router-dom";
import DateComponent from "../date/dateComponent";
import Tags from "./tags/tags";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../../core/services/interceptor";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CourseCard = ({
  title,
  img,
  teacherName,
  statusName,
  describe,
  student,
  cost,
  likeCount,
  dissLikeCount,
  id,
  lastUpdate,
  levelName,
  userIsLiked,
  userLikedId,
  currentUserDissLike,
}) => {
  const queryClient = useQueryClient();
  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/courses/coursedetail/${id}`);
  };

  const handleLike = async () => {
    const res = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
    // console.log(res);
  };
  const { mutate } = useMutation({
    mutationFn: handleLike,
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  const handleDelete = async () => {
    const myData = new FormData();

    myData.append("CourseLikeId", userLikedId);

    const res = await http.delete("/Course/DeleteCourseLike", { data: myData });
    console.log(res);
  };
  const { mutate: mutateDeleteLike } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  const handleDisLike = async () => {
    const res = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`);
  };

  const { mutate: mutateDisLike } = useMutation({
    mutationFn: handleDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  return (
    <div className="w-[310px] h-[450px] bg-lightGray flex flex-col overflow-hidden rounded-3xl relative">
      <div className=" absolute top-2 right-2 flex space-x-2">
        <Tags color="#5A7EFF" text={statusName} />
        <Tags color="#DE59FF" text={levelName} />
      </div>
      <div className="w-full h-[200px] rounded-3xl">
        <img
          src={img == null ? defaultImg : img}
          alt="not set"
          className="w-[310px] h-[200px] object-cover rounded-3xl blur-[#54545417] shadow-md"
          onError={addDefaultImg}
          onClick={handleNavigate}
        />
      </div>
      <div className=" w-full h-full px-3 flex flex-col  mt-3 ">
        <div className="grow ">
          <h2 className="text-lg font-semibold text-gray- line-clamp-1">
            {title}
          </h2>
          <p className="text-[#787878] text-sm mt-2 line-clamp-2">{describe}</p>
        </div>
        <div className="mt-3 flex-none space-y-3 ">
          <div className="flex items-center gap-3  text-sm">
            <img src={TeacherIcon} alt="" className="h-5 w-5" />
            <span>{teacherName}</span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm">
            <img src={StudentIcon} alt="" className="h-5 w-5" />
            <span className="text-md space-x-2">
              <span>{student}</span>
              <span>دانشجو</span>
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm">
            <img src={CalenderIcon} alt="" className="h-5 w-5" />
            <DateComponent insertDate={lastUpdate} />
          </div>
        </div>
        <div className="flex flex-none justify-between my-3">
          <div className="space-x-2 flex justify-center items-center">
            <span className="text-lg font-bold">
              {new Intl.NumberFormat("fa-IR").format(cost)}
            </span>
            <span className="text-blue-400 text-md line-clamp-1">تومان</span>
          </div>
          <div className="flex gap-2">
            {userIsLiked ? (
              <div
                className="flex items-center gap-1"
                onClick={() => mutateDeleteLike()}
              >
                <AiOutlineLike className="w-5 h-5 text-red-500" />
                <span>{likeCount}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1" onClick={() => mutate()}>
                <AiOutlineLike className="w-5 h-5" />
                <span>{likeCount}</span>
              </div>
            )}
            {currentUserDissLike ? (
              <div className="flex items-center gap-1">
                <AiOutlineDislike className="w-5 h-5 text-red-500" />
                <span>{dissLikeCount}</span>
              </div>
            ) : (
              <div
                className="flex items-center gap-1"
                onClick={() => mutateDisLike()}
              >
                <AiOutlineDislike className="w-5 h-5" />
                <span>{dissLikeCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
