import React from "react";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";
import ThumbUp from "./../../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../../assets/images/thumb-down.svg";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";

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
}) => {
  const addDefaultImg = (e) => {
    e.target.src = StudentIcon;
  };

  return (
    <div className="w-[310px] h-[450px] bg-lightGray flex flex-col overflow-hidden rounded-3xl">
      <div className="w-full h-[200px] rounded-3xl">
        <img
          src={defaultImg}
          alt="not set"
          className="w-fit h-[200px] object-cover rounded-3xl blur-[#54545417] shadow-md"
          onError={addDefaultImg}
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
            <img src={CalenderIcon} alt="" className="h-5 w-5" />
            <span>{statusName}</span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm">
            <img src={StudentIcon} alt="" className="h-5 w-5" />
            <span className="text-md space-x-2">
              <span>{student}</span>
              <span>دانشجو</span>
            </span>
          </div>
        </div>
        <div className="flex flex-none justify-between my-3">
          <div className="space-x-2 flex justify-center items-center">
            <span className="text-lg font-bold">{cost}</span>
            <span className="text-blue-400 text-md line-clamp-1">تومان</span>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <img src={ThumbUp} alt="" className="w-4 h-4" />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={thumbDown} alt="" className="w-3 h-4" />
              <span>{dissLikeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
