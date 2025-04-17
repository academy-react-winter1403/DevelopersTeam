import React, { lazy, Suspense, useEffect, useState } from "react";
const TableMyReserveCourses = lazy(() => import("./tableMyReserveCourses"));
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import { Spin } from "antd";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsiveReserveMyCourse from "../responsiveReserveMyCourse";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import { CiMoneyBill } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";
import PaymentModal from "../../payment/paymentModal/paymentModal";
import PanelModal from "../../../common/panelModal/panelModal";

const TableMyReserveCoursesHolder = ({ data, isSuccess }) => {
  const [convertData, setConvertData] = useState([]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
            <div className="flex gap-5 cursor-pointer">
              <CiMoneyBill className="w-6 h-6 text-gray" />
            </div>
          ),
        };
      });
      setConvertData(i);
    }
  }, [isSuccess, data]);
  console.log(data);
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
      {data?.map((item) => {
        return (
          <PanelModal
            isMyCourses={true}
            onClose={onClose}
            open={open}
            title={item.courseName}
            teacher={item.courseName}
            lastUpdate={item.reserverDate}
          />
        );
      })}
    </div>
  );
};

export default TableMyReserveCoursesHolder;
