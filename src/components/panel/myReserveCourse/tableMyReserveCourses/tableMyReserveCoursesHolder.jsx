import React, { lazy, Suspense, useEffect, useState } from "react";
const TableMyReserveCourses = lazy(() => import("./tableMyReserveCourses"));
import http from "./../../.././../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import { IoMdClose } from "react-icons/io";
import { Progress, Spin } from "antd";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsiveReserveMyCourse from "../responsiveReserveMyCourse";

const TableMyReserveCoursesHolder = ({
  convertedData,
  setCovertedData,
  data,
  isSuccess,
  moreData,
}) => {
  const icons = (
    <div className="flex gap-5">
      <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
    </div>
  );

  useEffect(() => {
    if (isSuccess && data) {
      const i = data.map((el) => {
        return {
          img: <img src={el.tumbImageAddress || defImg} alt="" />,
          name: el.courseName,
          teacher: el.fullName,
          date: <DateComponent insertDate={el.lastUpdate} />,
          price: <PriceComponent cost={el.cost} />,
          register: el.paymentStatus,
          eye: (
            <div className="flex gap-5">
              <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
            </div>
          ),
        };
      });
      setCovertedData(i);
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
            {isSuccess && <TableMyReserveCourses data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <ResponsiveReserveMyCourse data={data} />
    </div>
  );
};

export default TableMyReserveCoursesHolder;
