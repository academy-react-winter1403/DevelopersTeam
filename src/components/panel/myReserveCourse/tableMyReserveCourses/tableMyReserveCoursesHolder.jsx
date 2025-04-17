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
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import { CiMoneyBill } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";
import PaymentModal from "../../payment/paymentModal/paymentModal";

const TableMyReserveCoursesHolder = ({ data, isSuccess }) => {

  const [convertData, setConvertData] = useState([]);
  useEffect(() => {
    if (isSuccess && data) {
      // console.log(data);
      const i = data.map((el) => {
        
        return {
          img: <img src={el.tumbImageAddress || defImg} alt="" />,
          name: el.courseName,
          teacher: el?.courseData.teacherName,
          date: <DateComponent insertDate={el.courseData.startTime} />,
          reserveDate: <DateComponent insertDate={el.reserverDate} />,
          price: <PriceComponent cost={el.courseData.cost} />,
          register: el.accept ? (
            <TagsAccept text="پذیرفته شده" />
          ) : (
            <TagsNotAccept text="پذیرفته نشده" />
          ),
          eye: (
            <div className="flex gap-5 cursor-pointer">
              <PiEyeLight className="w-6 h-6 text-gray" />
            </div>
          ),
          pay: (
            <div  className="flex gap-5 cursor-pointer">
              <CiMoneyBill className="w-6 h-6 text-gray" />
            </div>
          ),
        };
      });
      setConvertData(i);
    }
  }, [isSuccess, data]);
console.log(data );
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
