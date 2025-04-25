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
import http from "./../../../../core/services/interceptor";
import { VscChromeClose } from "react-icons/vsc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const TableFaveCourseHandle = ({ data, isSuccess }) => {
  const queryClient = useQueryClient();
  const [convertData, setConvertData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const showDrawer = (course) => {
    setOpen(true);
    setSelectedCourse(course);
  };
  const onClose = () => {
    setSelectedCourse(null);
    setOpen(false);
  };

  const img = (el) => (
    <img
      src={el?.tumbImageAddress == null ? defImg : el.tumbImageAddress}
      alt=""
      className="rounded-lg"
    />
  );

  const { mutate: mutateDeleteFav } = useMutation({
    mutationFn: (id) => {
      const myData = new FormData();
      myData.append("CourseFavoriteId", id);
      return http.delete(`/Course/DeleteCourseFavorite`, {
        data: myData,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courseDetail"]);
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError: (error) => {
      // console.error("Error deleting like:", error);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const newConverted = data?.map((el) => {
        let newData = {};
        newData["img"] = img(el); 
        newData["name"] = (
          <NavLink
            to={`/courses/coursedetail/${el.courseId}`}
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {el.courseTitle}
          </NavLink>
        );
        newData["teacher"] = el.teacheName;
        newData["date"] = <DateComponent insertDate={el.lastUpdate} />;
        newData["price"] = (
          <div className="flex items-center space-x-3">
            <PriceComponent cost={el.courseData.cost} />
<<<<<<< HEAD
            <span className="dark:text-gray-300">تومان</span>
=======
            <span className="text-navyBlue">تومان</span>
>>>>>>> 3da1653cfbbba4a6d748407b670867140d37411a
          </div>
        );
        newData["eye"] = (
          <div className="flex gap-2">
            <div onClick={() => showDrawer(el)}>
              <MdOutlineRemoveRedEye className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            </div>
            <div onClick={() => mutateDeleteFav(el.favoriteId)}>
              <VscChromeClose className="w-5 h-5 text-red-400 dark:text-red-400 cursor-pointer" />
            </div>
          </div>
        );
        return newData;
      });
      setConvertData(newConverted);
    }
  }, [data, isSuccess]);

  return (
    <div className="">
      <div className="bg-white dark:bg-gray-800 w-full rounded-2xl mt-5">
        <div className="w-full hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <TableBody data={convertData} />}
          </Suspense>
        </div>
      </div>
      <ResponsivFavCourse showDrawer={showDrawer} data={data} />

      {selectedCourse && (
        <PanelModal
          isMyCourses={true}
          onClose={onClose}
          open={open}
          img={selectedCourse.tumbImageAddress}
          title={selectedCourse.courseTitle}
          paymentStatus={selectedCourse.paymentStatus}
          describe={selectedCourse.describe}
          teacher={selectedCourse.teacheName}
          lastUpdate={selectedCourse.lastUpdate}
          cost={selectedCourse.courseData.cost}
        />
      )}
    </div>
  );
};

export default TableFaveCourseHandle;
