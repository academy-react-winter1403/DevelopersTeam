import React from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableMyCoursesHolder from "./tableMyCourses/tableMyCoursesHolder";

const MyCourse = () => {
  return (
    <div>
      <div>
        <h2 className="w-full h-10  mt-5 font-bold text-xl">دوره من</h2>
      </div>
      <FavBottomCourse/>
      <TableMyCoursesHolder/>
    </div>
  );
};

export default MyCourse;
