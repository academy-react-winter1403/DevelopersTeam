import React, { lazy, Suspense, useEffect, useState } from "react";
// const TableBody = lazy(() => import("./tableTopCourses"));
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import TableBody from "./tableBody";
import { IoMdClose } from "react-icons/io";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsivFavCourse from "../responsivFavCourse";
import { Spin } from "antd";
import PanelModal from "../../../common/panelModal/panelModal";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import http from './../../../../core/services/interceptor'
import { VscChromeClose } from "react-icons/vsc";

const TableFaveCourseHandle = ({
  data,
  convertedData,
  setCovertedData,
  isSuccess,
}) => {
  const [open, setOpen] = useState(false);
  const [favoriteCourses, setFavoriteCourses] = useState(
    data?.favoriteCourseDto || []
  );

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const icons = (
    <div className="flex gap-5">
      <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
      <IoMdClose className="w-6 h-6 text-red-500" />
    </div>
  );

  const img = (
    <img
      src={data?.tumbImageAddress == null ? defImg : el.tumbImageAddress}
      alt=""
    />
  );

  // Function to delete item
  const handleDeleteItem = async (id) => {
    try {
      // Make API call
      const res = await http.delete(`/Course/DeleteCourseFavorite/${id}`);
      if (res.status === 200) {
        // Remove the item from state
        const updatedCourses = favoriteCourses.filter((item) => item.id !== id);
        setFavoriteCourses(updatedCourses);
      } else {
        console.error("Deletion failed!");
      }
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

 

  useEffect(() => {
    if (isSuccess) {
      const newConverted = data.favoriteCourseDto.map((el) => {
        let newData = {};
        newData["img"] = img;
        newData["name"] = el.courseTitle;
        newData["teacher"] = el.teacheName;
        newData["date"] = <DateComponent insertDate={el.lastUpdate} />;
        newData["price"] = (
          <div className="flex space-x-2">
            <PriceComponent cost={"1500000"} />
            <span>تومان</span>
          </div>
        );
        newData["eye"] = (
         <div className="flex gap-2">
           <div onClick={showDrawer}>
            <MdOutlineRemoveRedEye className="w-5 h-5 text-gray dark:text-gray-400" />
          </div>
          <div onClick={() => handleDeleteItem(el.id)}>
          <VscChromeClose className="w-5 h-5 text-red-400 dark:text-gray-400"/>
          </div>
         </div>
        );
        return newData;
      });
      setCovertedData(newConverted);
    }
  }, [data, isSuccess, setCovertedData]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-auto  hidden sm:block ">
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <TableBody data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <ResponsivFavCourse data={data} />

      {data?.favoriteCourseDto.map((item) => {
        return (
          <PanelModal
            isMyCourses={true}
            onClose={onClose}
            open={open}
            img={item.tumbImageAddress}
            title={item.courseTitle}
            paymentStatus={item.paymentStatus}
            describe={item.describe}
            teacher={item.teacheName}
            lastUpdate={item.lastUpdate}
          />
        );
      })}
    </div>
  );
};

export default TableFaveCourseHandle;
