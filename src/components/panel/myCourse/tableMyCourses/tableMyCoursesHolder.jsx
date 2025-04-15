import React, { lazy, Suspense, useEffect, useState } from "react";
const TableMyCourses = lazy(() => import("./tableMyCourses"));
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsiveMyCourse from "../responsiveMyCourse";
import { Spin } from "antd";

const TableMyCoursesHolder = ({
  data,
  convertedData,
  setCovertedData,
  isSuccess,
}) => {
  const icons = (
    <div className="flex gap-5">
      <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
    </div>
  );

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data.listOfMyCourses.map((el) => {
        return {
          img: <img src={el.tumbImageAddress || defImg} alt="" />,
          name: el.courseTitle,
          teacher: el.fullName,
          date: <DateComponent insertDate={el.lastUpdate} />,
          price: <PriceComponent cost={el.cost} />,
          pay: el.paymentStatus,
          eye: (
            <div className="flex gap-5">
              <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
            </div>
          ),
        };
      });
      setCovertedData(newData);
    }
  }, [isSuccess, data]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-70 hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <TableMyCourses data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <ResponsiveMyCourse data={data} />
    </div>
  );
};

export default TableMyCoursesHolder;
