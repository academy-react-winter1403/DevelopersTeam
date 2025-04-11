import React from "react";
import FavBottomCourse from "./favBottomCourse";
import TableFaveCourseHandle from "./tableFavCourse/tableFaveCourseHandle";

const FavCourse = () => {
  return (
    <div>
      <div>
        <h2 className="w-full h-10  mt-5 font-bold text-xl">
          علاقه مندی دوره ها
        </h2>
      </div>
      <FavBottomCourse/>
      <TableFaveCourseHandle/>
    </div>
  );
};

export default FavCourse;
