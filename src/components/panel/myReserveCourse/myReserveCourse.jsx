import React from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import SortMyReserve from "./sortMyReserve";

const MyReserveCourse = () => {
  return (
    <div>
      <div>
        <h2 className="w-full h-10  mt-5 font-bold text-xl">رزرو من</h2>
      </div>
      <div className="flex items-center">
        <div>
          <FavBottomCourse />
        </div>
        <div className="pt-14">
          <SortMyReserve />
        </div>
      </div>
    </div>
  );
};

export default MyReserveCourse;
