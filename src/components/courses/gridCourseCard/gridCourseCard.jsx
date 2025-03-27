import React from "react";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";

import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";

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
}) => {
  return (
    <div
      // className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/6 h-[370px] xl:h-[400px] border-2 border-[#E4E4E4] rounded-2xl bg-gray-50 flex flex-col"
      className="w-full h-[300px] bg-lightGray grid grid-cols-5 overflow-hidden rounded-3xl mr-3"
    >
      <div className="col-span-2 bg-red-400 rounded-3xl"></div>
      <div className="col-span-3">
        <div>{title}</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default GridCourseCard;
