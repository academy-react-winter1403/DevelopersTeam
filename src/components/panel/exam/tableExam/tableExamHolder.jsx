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
import Percent from "./percent";

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
  const addDefaultImg = (e) => {
    e.target.src = defImg;
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data?.map((el) => {
        return {
          // img: (
          //   <img
          //     src={el.Image == null && "undefined" ? defImg : el.Image}
          //     alt=""
          //     className=" overflow-hidden w-full h-24 rounded-xl"
          //     onError={addDefaultImg}
          //   />
          // ),
          name: <NavLink to={`/panel/exampage/${el?.id}`}>{el.title}</NavLink>,
          describe: el.Desc,
          clock: el.time,
          date: <DateComponent insertDate={el.Insert} />,
          lev: el.Level,
          average: <Percent id={el.id} />,
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
