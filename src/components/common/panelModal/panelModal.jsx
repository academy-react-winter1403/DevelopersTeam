import React from "react";
import { Drawer } from "antd";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";
import PriceComponent from "../priceComponent/priceComponent";
import DateComponent from "../date/dateComponent";
import { NavLink } from "react-router-dom";
import "./panel.css";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { PiStudentBold, PiStudentThin } from "react-icons/pi";
import { useDarkMode } from "./../../../context/theme/themeContext";

const PanelModal = ({
  onClose,
  open,
  img,
  title,
  paymentStatus,
  describe,
  teacher,
  lastUpdate,
  isMyCourses,
  cost,
  courseId,
}) => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <>
      <Drawer
        placement="left"
        width={500}
        onClose={onClose}
        open={open}
        headerStyle={""}
        mask={true}
        maskStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        style={darkMode && { backgroundColor: "#1e2939" }}
      >
        <div className="lg:w-[430px] h-auto mx-4 lg:m-0 dark:text-white dark:bg-gray-800">
          <div className="w-full md:h-[287px] rounded-3xl overflow-hidden ">
            <img
              src={img ? img : defaultImg}
              alt="not set"
              className="w-full h-[287px] "
            />
          </div>

          <div className="w-full h-auto space-y-3 dark:bg-gray-800">
            <NavLink to={`/courses/coursedetail/${courseId}`} className="block">
              <span className="w-24 h-8 bg-navyBlue text-center text-white leading-6 rounded-2xl flex items-center justify-center dark:bg-blue-600">
                صفحه دوره
              </span>
            </NavLink>
            <h1 className="text-gray dark:text-gray-400">نام دوره</h1>
            <div className="space-y-5">
              <h1 className="font-bold text-2xl dark:text-white">{title}</h1>
              <p className="dark:text-gray-300 text-base">وضعیت ثبت نام</p>
              {isMyCourses && (
                <NavLink to="/panel/myreservecourse" className="block">
                  <span className="w-24 h-8 bg-navyBlue text-center text-white leading-8 rounded-2xl flex items-center justify-center dark:bg-blue-600">
                    رزرو دوره
                  </span>
                </NavLink>
              )}

              <h1 className="text-gray text-base dark:text-gray-400">
                توضیح مختصر
              </h1>
              <h1 className="text-base dark:text-gray-300">{describe}</h1>
            </div>
            <div className="w-full">
              <h1 className="text-gray dark:text-gray-400 text-xl">مدرس</h1>
              <div className="flex space-x-3 items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src={img ? img : defaultImg}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="font-semibold dark:text-white text-base">
                    {teacher}
                  </h1>
                </div>
              </div>
              <div className="text-xl font-semiboldbold space-y-3 flex items-center dark:text-gray-300">
                <PiStudentBold className="w-6 h-6" />
                <div>دانشجو</div>
              </div>
              <div className="flex items-center gap-1 dark:text-gray-300">
                <HiOutlineCalendarDateRange className="w-6 h-6" />
                <span>شروع دوره</span>
              </div>
              <div className="flex justify-between items-center mt-3 font-semibold">
                <div className="flex items-center gap-1 dark:text-gray-300">
                  <HiOutlineCalendarDateRange className="w-6 h-6" />
                  <DateComponent insertDate={lastUpdate} />
                </div>
                <div className="text-xl flex gap-1 dark:text-gray-300">
                  <PriceComponent cost={cost} />
                  <span className="text-navyBlue dark:text-blue-400">
                    تومان
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default PanelModal;
