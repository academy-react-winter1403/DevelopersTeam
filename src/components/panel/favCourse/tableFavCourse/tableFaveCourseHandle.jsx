import React, { lazy, Suspense, useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc"; // Import delete icon
import DateComponent from "../../../common/date/dateComponent";
import TableBody from "./tableBody";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsivFavCourse from "../responsivFavCourse";
import { Spin } from "antd";
import PanelModal from "../../../common/panelModal/panelModal";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import http from "./../../../../core/services/interceptor";

const TableFaveCourseHandle = ({
  data,
  convertedData,
  setCovertedData,
  isSuccess,
}) => {
  const [open, setOpen] = useState(false);
  const [favoriteCourses, setFavoriteCourses] = useState(data?.favoriteCourseDto || []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Function to delete an item
  const handleDeleteItem = async (id) => {
    try {
      const res = await http.delete(`/Course/DeleteCourseFavorite/${id}`);
      if (res.status === 200 || res.ok) {
        // Update local state
        const updatedCourses = favoriteCourses.filter((item) => item.id !== id);
        setFavoriteCourses(updatedCourses);

        // Update converted data to reflect changes
        const newConverted = updatedCourses.map((el) => ({
          img: (
            <img
              src={el?.tumbImageAddress == null ? defImg : el.tumbImageAddress}
              alt={el.courseTitle}
            />
          ),
          name: el.courseTitle,
          teacher: el.teacheName,
          date: <DateComponent insertDate={el.lastUpdate} />,
          price: (
            <div className="flex space-x-2">
              <PriceComponent cost="1500000" />
              <span>تومان</span>
            </div>
          ),
          eye: (
            <div className="flex gap-2">
              <div onClick={showDrawer}>
                <MdOutlineRemoveRedEye className="w-5 h-5 text-gray dark:text-gray-400" />
              </div>
              <div onClick={() => handleDeleteItem(el.id)}>
                <VscChromeClose className="w-5 h-5 text-red-400 dark:text-gray-400 cursor-pointer" />
              </div>
            </div>
          ),
        }));
        setCovertedData(newConverted);
      } else {
        console.error("Failed to delete item from server!");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const newConverted = favoriteCourses.map((el) => ({
        img: (
          <img
            src={el?.tumbImageAddress == null ? defImg : el.tumbImageAddress}
            alt={el.courseTitle}
          />
        ),
        name: el.courseTitle,
        teacher: el.teacheName,
        date: <DateComponent insertDate={el.lastUpdate} />,
        price: (
          <div className="flex space-x-2">
            <PriceComponent cost="1500000" />
            <span>تومان</span>
          </div>
        ),
        eye: (
          <div className="flex gap-2">
            <div onClick={showDrawer}>
              <MdOutlineRemoveRedEye className="w-5 h-5 text-gray dark:text-gray-400" />
            </div>
            <div onClick={() => handleDeleteItem(el.id)}>
              <VscChromeClose className="w-5 h-5 text-red-400 dark:text-gray-400 cursor-pointer" />
            </div>
          </div>
        ),
      }));
      setCovertedData(newConverted);
    }
  }, [favoriteCourses, isSuccess, setCovertedData]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className="w-full h-auto hidden sm:block">
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
      <ResponsivFavCourse data={favoriteCourses} />

      {/* Panel modal for additional info */}
      {favoriteCourses.map((item) => (
        <PanelModal
          key={item.id}
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
      ))}
    </div>
  );
};

export default TableFaveCourseHandle;
