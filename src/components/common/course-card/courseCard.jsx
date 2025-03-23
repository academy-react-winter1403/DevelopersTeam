import React from "react";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";
import ThumbUp from "./../../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../../assets/images/thumb-down.svg";

const CourseCard = ({ title, img, teacherName, statusName, describe, student, cost, likeCount, dissLikeCount }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[400px] border-2 border-gray-50 rounded-2xl bg-gray-50 flex flex-col">
      <div className="h-1/3">
        <img src={img} alt="" className="w-full h-full object-cover rounded-t-2xl" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h2 className="text-lg font-semibold text-gray- line-clamp-1">{title}</h2>
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">{describe}</p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center gap-2 mt-2 text-sm">
            <img src={TeacherIcon} alt="" className="h-5 w-5" />
            <span>{teacherName}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <img src={CalenderIcon} alt="" className="h-5 w-5" />
            <span>{statusName}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <img src={StudentIcon} alt="" className="h-5 w-5" />
            <span className="text-md">{student}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-4">
        <div>
          <span className="text-md">{cost}</span> <span className="text-blue-400 text-[15px]">تومان</span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <img src={ThumbUp} alt="" className="w-6 h-6" />
            <span>{likeCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={thumbDown} alt="" className="w-4 h-5" />
            <span>{dissLikeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
