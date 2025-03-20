import React from "react";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";
import ThumbUp from "./../../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../../assets/images/thumb-down.svg";




const CourseCard = ({title , img , teacherName , statusName , describe , student , cost , likeCount , dissLikeCount}) => {
  return (
    <div className="h-[400px] w-1/5 border-2 border-gray-50 rounded-2xl bg-gray-50">
      <div className="h-1/3 rounded-3xl">
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="mt-14 mr-2">{title}</h2>
      </div>
      <div className="flex flex-wrap">
        <h2 className="text-gray-400 text-[11px] mt-2 mr-2 ">{describe}</h2>
      </div>
      <div className="flex gap-2 mt-3 mr-2 leading-4 text-[12px]">
        <img src={TeacherIcon} alt=""  className="h-5 w-5"/> {teacherName}
      </div>
      <div className="flex gap-2 mt-3 mr-2 leading-4 text-[12px]">
        <img src={CalenderIcon} alt="" className="h-5 w-5"/> {statusName}
      </div>
      <div className="flex gap-2 mt-3 mr-2 leading-4 text-[12px]">
        <img src={StudentIcon} alt="" className="h-5 w-5"/>{student}
      </div>
      <div className="flex justify-around gap-4 mt-2">
        <div>
         <span className="text-[15px]">{cost}</span> <span className="text-blue-400 text-[15px]">تومان</span>
        </div>       
         <div className="flex gap-1">
         <img src={ThumbUp} alt=""  className="w-6 h-6"/>{likeCount}
         </div>
        <div className="flex gap-1">
          <img src={thumbDown} alt="" className="w-4 h-5"/> {dissLikeCount}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
