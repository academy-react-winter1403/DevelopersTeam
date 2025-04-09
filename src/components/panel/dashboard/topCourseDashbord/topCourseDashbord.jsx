import React, { lazy, Suspense } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
 const TableTopCourses = lazy(() => import('./tableTopCourses'));


const TopCourseDashbord = () => {
  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-10 flex justify-between items-center px-6 py-2 font-bold">
          <h2>جدیدترین دوره ها</h2>
          <div className="flex items-center text-navyBlue gap-1 ">
            <h2>مشاهده همه</h2>
            <MdKeyboardArrowLeft />
          </div>
        </div>
        <div className=" w-full h-70">
          <Suspense fallback={<h1>loading...</h1>}>
            <TableTopCourses />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TopCourseDashbord;
