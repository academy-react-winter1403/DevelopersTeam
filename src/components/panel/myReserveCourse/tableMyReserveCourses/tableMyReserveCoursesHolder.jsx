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
  data,
  isSuccess,
}) => {
  const [convertData,setCovertData]=useState([])
  useEffect(() => {
    if (isSuccess && data) {
      // console.log(data);
      const i = data.map((el) => {
        
        return {
          img: <img src={el.tumbImageAddress || defImg} alt="" />,
          name: el.courseName,
          teacher: el.courseData.teacherName ||22 ,
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
      setCovertData(i);
    }
  }, [isSuccess, data]);

  return (
    <div className="  ">
      <div className="bg-white w-full  rounded-2xl mt-5">
        <div className=" w-full  hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <TableMyReserveCourses data={convertData} />}
          </Suspense>
        </div>
      </div>
      <ResponsiveReserveMyCourse data={data} />
    </div>
  );
};

export default TableMyReserveCoursesHolder;
