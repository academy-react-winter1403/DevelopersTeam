import React, { lazy, Suspense, useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
const TableTopCourses = lazy(() => import("./tableTopCourses"));
import http from "./../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import { Divider, Spin, Modal } from "antd";
import PanelModal from "../../../common/panelModal/panelModal";

const TopCourseDashbord = () => {
  const [convertedData, setCovertedData] = useState([]);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const getTopCourses = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`
    );
    return res;
  };

  const { data, isSuccess } = useQuery({
    queryKey: "topCoursesPanel",
    queryFn: getTopCourses,
  });

  useEffect(() => {
    if (isSuccess) {
      const i = data.listOfMyCourses.map((el) => {
        let newData = {};
        newData["name"] = el.courseTitle;
        newData["desc"] = el.describe;
        newData["teacher"] = el.fullName;
        newData["date"] = <DateComponent insertDate={el.lastUpdate} />;
        newData["price"] = (
          <div className="flex space-x-2">
            <PriceComponent cost={el.cost} />
            <span>تومان</span>
          </div>
        );
        newData["eye"] = (
          <div onClick={showDrawer}>
            <MdOutlineRemoveRedEye className="w-5 h-5 text-gray dark:text-gray-400" />
          </div>
        );
        return newData;
      });
      setCovertedData(i);
    }
  }, [isSuccess]);

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 w-full h-auto rounded-2xl mt-5 hidden sm:block">
        <div className="w-full h-10 flex justify-between items-center px-6 py-2 font-bold">
          <h2 className="dark:text-white">جدیدترین دوره ها</h2>
          <div className="flex items-center text-navyBlue dark:text-blue-400 gap-1">
            <h2>مشاهده همه</h2>
            <MdKeyboardArrowLeft />
          </div>
        </div>
        <div className="w-full h-70">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <TableTopCourses data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 w-full h-auto rounded-2xl mt-5 sm:hidden">
        <div className="w-full h-10 flex justify-between items-center px-6 py-2 font-bold">
          <h2 className="dark:text-white">جدیدترین دوره ها</h2>
          <div className="flex items-center text-navyBlue dark:text-blue-400 gap-1">
            <h2>مشاهده همه</h2>
            <MdKeyboardArrowLeft />
          </div>
        </div>
        {data?.listOfMyCourses.map((item, index) => {
          return (
            <div className="w-full h-auto px-6 mt-5" key={index}>
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h1 className="text-base dark:text-white">
                    {item.courseTitle}
                  </h1>
                  <h1 className="text-base text-gray dark:text-gray-400">
                    {item.fullName}
                  </h1>
                  <span className="text-gray dark:text-gray-400">
                    <DateComponent insertDate={item.lastUpdate} />
                  </span>
                </div>
                <div onClick={showDrawer}>
                  <MdOutlineRemoveRedEye className="w-6 h-6 text-gray dark:text-gray-400" />
                </div>
              </div>
              <Divider className="dark:bg-gray-700" />
            </div>
          );
        })}
      </div>
      {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        title={selectedCourse?.courseTitle || selectedCourse?.name}
        footer={null  }>
        {selectedCourse && (
          <>
            <p>توضیح: {selectedCourse.describe || selectedCourse.desc}</p>
            <p>مدرس: {selectedCourse.fullName || selectedCourse.teacher}</p>
           </>
        )}
      </Modal> */}
      <PanelModal onClose={onClose} open={open} />
    </div>
  );
};

export default TopCourseDashbord;
