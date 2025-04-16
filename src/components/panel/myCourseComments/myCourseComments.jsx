import React from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableHolder from "./table/tableHolder";

const MyCourseComments = () => {
  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">کامنت های دوره</h2>
      </div>
      <div className="flex items-center">
        <div>
          <FavBottomCourse />
        </div>
      </div>
      <TableHolder />
    </div>
  );
};

export default MyCourseComments;
