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
import PanelModal from "../../../common/panelModal/panelModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import { VscChromeClose } from "react-icons/vsc";
import toast from "react-hot-toast";

const TableMyReserveCoursesHolder = ({ data, isSuccess }) => {
  const [convertData, setConvertData] = useState([]);
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { mutate: mutateDeleteMyReserve } = useMutation({
    mutationFn: async (id) => {
      return await http.delete("/CourseReserve", {
        data: { reserveId:id },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("myReserveCoursesPanel");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

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
            <div className="flex gap-2 items-center">
              <div className="flex gap-5 cursor-pointer" onClick={showDrawer}>
                <PiEyeLight className="w-6 h-6 text-gray" />
              </div>
              <div onClick={() => mutateDeleteMyReserve(el.reserveId)}>
                <VscChromeClose className="w-5 h-5 text-red-400 dark:text-gray-400" />
              </div>
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
