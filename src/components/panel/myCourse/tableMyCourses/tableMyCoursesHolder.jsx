import React, { lazy, Suspense, useEffect, useState } from "react";
const TableMyCourses = lazy(() => import("./tableMyCourses"));
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsiveMyCourse from "../responsiveMyCourse";
import { Spin } from "antd";
import { TagsNotAccept } from "../../tagStatus/tagStatus";
import PaymentModal from "../../payment/paymentModal/paymentModal";
import { CiMoneyBill } from "react-icons/ci";

const TableMyCoursesHolder = ({
  data,
  convertedData,
  setCovertedData,
  isSuccess,
  showDrawer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CourseIdx, setCourseIdx] = useState();
  const showModal = (id) => {
    setIsModalOpen(true);
    setCourseIdx(id);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data.listOfMyCourses.map((el) => {
        return {
          img: <img src={el.tumbImageAddress || defImg} alt="" />,
          name: el.courseTitle,
          teacher: el.fullName,
          date: <DateComponent insertDate={el.lastUpdate} />,
          price: <PriceComponent cost={el.cost} />,
          pay: <TagsNotAccept text={el.paymentStatus} />,
          eye: (
            <div onClick={showDrawer} className="flex gap-5">
              <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
            </div>
          ),
          payModal: (
            <div
              onClick={() => showModal(el.courseId)}
              className="flex gap-5 cursor-pointer"
            >
              <CiMoneyBill className="w-6 h-6 text-gray" />
            </div>
          ),
        };
      });
      setCovertedData(newData);
    }
  }, [isSuccess, data]);
  // console.log("dddd",data);
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
      <ResponsiveMyCourse showDrawer={showDrawer} data={data} />
      <PaymentModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        data={CourseIdx}
      />
    </div>
  );
};

export default TableMyCoursesHolder;
