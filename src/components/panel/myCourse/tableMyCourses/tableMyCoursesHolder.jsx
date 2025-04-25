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
import { NavLink } from "react-router-dom";
import PanelModal from "../../../common/panelModal/panelModal";

const TableMyCoursesHolder = ({
  data,
  convertedData,
  setCovertedData,
  isSuccess,
  totalCount,
  pageNum,
  setPageNum,
  itemPerPage,
}) => {
  const [CourseIdx, setCourseIdx] = useState([]);
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);

  const showModal = (data) => {
    setFirstModal(true);
    setCourseIdx(data);
  };
  const handleFirstOk = () => {
    setSecondModal(true);
    setFirstModal(false);
  };
  const handleSecondOk = () => {
    setSecondModal(false);
    setThirdModal(true);
  };

  const handleThirdOk = () => {
    setThirdModal(false);
  };

  const [selectedCourse, setSelectedCourse] = useState(null);

  const [open, setOpen] = useState(false);
  const showDrawer = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };
  const onClose = () => {
    setSelectedCourse(null);
    setOpen(false);
  };

  const addDefaultImg = (e) => {
    e.target.src = defImg;
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data.listOfMyCourses.map((el) => {
        return {
          img: (
            <img
              src={
                el.tumbImageAddress == null && "undefined"
                  ? defImg
                  : el.tumbImageAddress
              }
              alt=""
              className=" overflow-hidden w-full h-24 rounded-xl"
              onError={addDefaultImg}
            />
          ),
          name: (
            <NavLink to={`/courses/coursedetail/${el.courseId}`}>
              <span>{el.courseTitle}</span>
            </NavLink>
          ),
          teacher: el.fullName,
          date: <DateComponent insertDate={el.lastUpdate} />,
          price: <PriceComponent cost={el.cost} />,
          pay: <TagsNotAccept text={el.paymentStatus} />,
          eye: (
            <div onClick={() => showDrawer(el)} className="flex gap-5">
              <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
            </div>
          ),
          payModal: (
            <div
              onClick={() => showModal(el)}
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
    <div className=" ">
      <div className="bg-white w-full  dark:bg-gray-800 rounded-2xl mt-5">
        <div className=" w-full hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && (
              <TableMyCourses
                totalCount={totalCount}
                pageNum={pageNum}
                setPageNum={setPageNum}
                itemPerPage={itemPerPage}
                data={convertedData}
              />
            )}
          </Suspense>
        </div>
      </div>
      <ResponsiveMyCourse isRes={true} showDrawer={showDrawer} data={data} />
      <PaymentModal
        firstModal={firstModal}
        secondModal={secondModal}
        setSecondModal={setSecondModal}
        setThirdModal={setThirdModal}
        setFirstModal={setFirstModal}
        id={CourseIdx.courseId}
        thirdModal={thirdModal}
        cost={CourseIdx.cost}
        handleFirstOk={handleFirstOk}
        handleSecondOk={handleSecondOk}
        factureData={data}
      />
      {selectedCourse && (
        <PanelModal
          firstModal={firstModal}
          secondModal={secondModal}
          thirdModal={thirdModal}
          setSecondModal={setSecondModal}
          setFirstModal={setFirstModal}
          setThirdModal={setThirdModal}
          id={CourseIdx}
          handleFirstOk={handleFirstOk}
          handleSecondOk={handleSecondOk}
          handleThirdOk={handleThirdOk}
          factureData={data}
        />
      )}
    </div>
  );
};

export default TableMyCoursesHolder;
