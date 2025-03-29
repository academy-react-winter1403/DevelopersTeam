import React from "react";
// import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
// import QuillWrite from "./../../assets/images/quill-write-02-stroke-rounded 2.svg";
// import ViewStroke from "./../../assets/images/view-stroke-rounded (1) 1.svg";
// import ThumbUp from "./../../assets/images/thumbs-up-stroke-rounded 1.svg";
// import thumbDown from "./../../assets/images/thumb-down.svg";
import { Link } from "react-router-dom";
// import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";

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
}) => {
  return (
    <div className="w-full h-72 bg-lightGray border-2 grid grid-cols-5 overflow-hidden rounded-3xl mr-3">
      <div className="col-span-2 bg-red-400 border-2 rounded-3xl"></div>

      <div className="col-span-3 border-2 border-green-400">
        <div>{title}</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default GridCourseCard;
