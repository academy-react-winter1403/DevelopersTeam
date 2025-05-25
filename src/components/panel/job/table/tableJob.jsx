import React, { lazy, Suspense, useEffect, useState } from "react";
import DateComponent from "../../../common/date/dateComponent";
import { Spin } from "antd";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import PanelModal from "../../../common/panelModal/panelModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import { VscChromeClose } from "react-icons/vsc";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
const TableBody= lazy(() => import("./tableBody"));

const TableJob = ({ data, isSuccess }) => {
  const queryClient = useQueryClient();

  const [convertData, setConvertData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const showDrawer = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };
  const onClose = () => {
    setSelectedCourse(null);
    setOpen(false);
  };

//   const { mutate: mutateDeleteMyReserve } = useMutation({
//     mutationFn: async (id) => {
//       return await http.delete("/CourseReserve", {
//         data: { id: id },
//       });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["myReserveCoursesPanel"]);
//       toast.success("عملیات با موفقیت انجام شد");
//     },
//     onError: (error) => {
//       toast.error(error?.response.data.ErrorMessage);
//     },
//   });

  useEffect(() => {
    if (isSuccess && data) {
      const i = data.map((el) => {
        return {
        //   name: (
        //     <NavLink to={`/courses/coursedetail/${el.courseId}`}>
        //       <span>{el.courseName}</span>
        //     </NavLink>
        //   ),
          teacher: el?.courseData.jobTitle,
          date: <DateComponent insertDate={el.courseData.workStartDate} />,
          reserveDate: <DateComponent insertDate={el.workEndDate} />,
         
          register: el.inWork ? (
            <TagsAccept text=" در حال کار" />
          ) : (
            <TagsNotAccept text="پایان کار" />
          ),
        
        };
      });
      setConvertData(i);
    }
  }, [isSuccess, data]);
  return (
    <div className="">
      <div className="bg-white w-full  dark:bg-gray-800  rounded-2xl mt-5">
        <div className=" w-full  hidden sm:block">
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
      {/* <ResponsiveReserveMyCourse showDrawer={showDrawer} data={data} /> */}
      {selectedCourse && (
        <PanelModal 
          inWork={true}
          onClose={onClose}
          open={open}
          title={selectedCourse.jobTitle}
          teacher={selectedCourse.aboutJob}
          lastUpdate={selectedCourse.reserverDate}
          courseId={selectedCourse.courseId}
          cost={selectedCourse?.courseData?.cost}
          describe={selectedCourse?.courseData?.aboutJob}
        />
      )}
    </div>
  );
};

export default TableJob;
