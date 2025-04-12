import React, { lazy, Suspense, useEffect, useState } from "react";
const TableMyCourses = lazy(() => import("./tableMyCourses"));
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import { IoMdClose } from "react-icons/io";
import { Progress } from "antd";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import defImg from "./../../../../assets/images/courses/courseimg.svg";

const TableMyCoursesHolder = ({
  data,
  convertedData,
  setCovertedData,
  isSuccess
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
      const i = data.listOfMyCourses.map((el) => {
        let newData = {};
        newData["img"] = img;
        newData["name"] = el.courseTitle;
        newData["teacher"] = el.fullName;
        newData["date"] = <DateComponent insertDate={el.lastUpdate} />;
        newData["price"] = <PriceComponent cost={el.cost} />;
        newData["pay"] = el.paymentStatus;
        newData["eye"] = icons;
        return newData;
      });
      setCovertedData(i);
    }
  }, [isSuccess]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-70">
          <Suspense fallback={<h1>loading...</h1>}>
            {isSuccess && <TableMyCourses data={convertedData} />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TableMyCoursesHolder;
