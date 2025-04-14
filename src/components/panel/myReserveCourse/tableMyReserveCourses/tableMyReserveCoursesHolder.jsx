import React, { lazy, Suspense, useEffect, useState } from "react";
const TableMyReserveCourses = lazy(() => import("./tableMyReserveCourses"));
import http from "./../../.././../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import { IoMdClose } from "react-icons/io";
import { Progress } from "antd";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsiveReserveMyCourse from "../responsiveReserveMyCourse";

const TableMyReserveCoursesHolder = ({
  convertedData,
  setCovertedData,
  data,
  isSuccess,
  moreData
}) => {
  
  const icons = (
    <div className="flex gap-5">
      <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
    </div>
  );
  const img = (
    <img
      src={data?.tumbImageAddress == null ? defImg : el.tumbImageAddress}
      alt=""
    />
  );
  useEffect(() => {
    if (isSuccess) {
      const i = data.map((el) => {
        let newData = {};
        newData["img"] = img;
        newData["name"] = el.courseName;
        newData["teacher"] = el.fullName;
        newData["date"] = <DateComponent insertDate={el.lastUpdate} />;
        newData["price"] = <PriceComponent cost={el.cost} />;
        newData["register"] = el.paymentStatus;
        newData["eye"] = icons;
        return newData;
      });
      setCovertedData(i);
    }
    
  }, [isSuccess]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-70 hidden sm:block">
          <Suspense fallback={<h1>loading...</h1>}>
            {isSuccess && <TableMyReserveCourses data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <ResponsiveReserveMyCourse data={data}/>
    </div>
  );
};

export default TableMyReserveCoursesHolder;
