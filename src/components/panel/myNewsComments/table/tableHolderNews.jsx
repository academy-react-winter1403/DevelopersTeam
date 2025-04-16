import React, { Suspense } from "react";
import TableCompNews from "./tableCompNews";
import FavBottomCourse from "../../favCourse/favBottomCourse";
import { Spin } from "antd";
import ResponsiveReserveMyCourse from "../../myReserveCourse/responsiveReserveMyCourse";

const TableHolderNews = () => {
  return (
    <div className=" h- ">
      <div className="bg-white w-full h- rounded-2xl mt-5">
        <div className=" w-full h- hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            <TableCompNews />
          </Suspense>
        </div>
      </div>
      <ResponsiveReserveMyCourse />
    </div>
  );
};

export default TableHolderNews;
