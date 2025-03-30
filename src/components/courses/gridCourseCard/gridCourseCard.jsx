import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import DateComponent from "../../common/date/dateComponent";

const GridCourseCard = ({
  title,
  img,
  teacherName,
  statusName,
  describe,
  student,
  cost,
  likeCount,
  dissLikeCount,
  miniDescribe,
  addUserFullName,
  lastUpdate,
}) => {
  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/courses/coursedetail/${id}`);
  };

  return (
    <div className="w-full h-72 bg-lightGray  grid grid-cols-5 overflow-hidden rounded-3xl mr-3">
      <div className="col-span-2 bg-red-400 rounded-3xl hidden sm:block">
        <img
          src={img == null ? defaultImg : img}
          alt="not set"
          className="w-full h-full object-cover rounded-3xl blur-[#54545417] shadow-md"
          onError={addDefaultImg}
          onClick={handleNavigate}
        />
      </div>

      <div className="col-span-3 m-6 space-y-5">
        <div className="w-full max-w-[300px] overflow-hidden space-y-2">
          <h2 className="text-lg font-bold  text-[#272727] overflow-hidden text-ellipsis truncate whitespace-nowrap sm:mt-2 ">
            {title}
          </h2>
          <h2 className="text-[#787878] text-sm font-semibold overflow-hidden text-ellipsis truncate whitespace-nowrap">
            {describe}
          </h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3  text-base">
            <img src={TeacherIcon} alt="" className="h-5 w-5" />
            <span>{teacherName}</span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-base">
            <img src={StudentIcon} alt="" className="h-5 w-5" />
            <span className="text-md space-x-2">
              <span>{student}</span>
              <span>دانشجو</span>
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-base">
            <img src={CalenderIcon} alt="" className="h-5 w-5" />
            <span>
              <DateComponent insertDate={lastUpdate} />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 gap-4 ml-1 sm:mb-2">
          <div className=" flex justify-around items-center gap-10">
            <div className="flex items-center justify-center space-x-3">
              <AiOutlineLike className="size-5" />
              <span className="text-sm font-bold text-[#272727]">
                {likeCount}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <AiOutlineDislike className="size-5" />
              <span className="text-sm font-bold text-[#272727]">
                {dissLikeCount}
              </span>
            </div>
          </div>
          <div className="space-x-2 flex justify-center items-center">
            <span className="text-lg font-bold">
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
