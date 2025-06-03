import React, { lazy, Suspense, useEffect, useState } from "react";
const ColumnExam = lazy(() => import("./columnExam"));
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import PriceComponent from "../../../common/priceComponent/priceComponent";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import { Spin } from "antd";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import { CiEdit, CiMoneyBill } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { VscChromeClose } from "react-icons/vsc";

const TableExamHolder = ({
  data,
  convertedData,
  setCovertedData,
  isSuccess,
  pageNum,
  setPageNum,
  itemPerPage,
  totalCount,
}) => {
  const showModal = (item) => {
    setCurrentEditItem(item);
  };

  const handleCancel = () => {
    setCurrentEditItem(null);
  };

  const addDefaultImg = (e) => {
    e.target.src = defImg;
  };

   const { mutate: mutateDeleteExam} = useMutation({
    mutationFn: async (id) => {
      return await axios.delete("https://taha-sepehr.liara.run/Exam/delete", {
        data: { id: id },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["examPanel"]);
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data?.map((el) => {
        return {
          img: (
            <img
              src={el.Image == null && "undefined" ? defImg : el.Image}
              alt=""
              className=" overflow-hidden w-full h-24 rounded-xl"
              onError={addDefaultImg}
            />
          ),
          name: el.title,
          describe: el.Desc,
          clock: el.time,
          date: <DateComponent insertDate={el.Insert} />,
          lev: el.Level,
          average: el.av,

           delet: <div onClick={() => mutateDeleteExam(el.id)}>
               <VscChromeClose className="w-5 h-5 text-red-400 dark:text-gray-400" />
             </div>
         
        };
      });
      setCovertedData(newData);
    }
  }, [isSuccess, data]);
  // console.log("dddd", data);
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
              <ColumnExam
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
      {/* <ResponsiveMyCourse isRes={true} showDrawer={showDrawer} data={data} /> */}
    </div>
  );
};

export default TableExamHolder;
