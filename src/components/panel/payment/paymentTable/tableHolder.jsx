import React, { useEffect } from "react";
import { Suspense } from "react";
import { Spin } from "antd";
import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import DateComponent from "../../../common/date/dateComponent";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import PriceComponent from "../../../common/priceComponent/priceComponent";
const TableComp = lazy(() => import("./tableComp"));

const TableHolder = ({
  paymentData,
  isSuccess,
  convertedData,
  setCovertedData,
  pageNum,
  setPageNum,
  itemPerPage,
  totalCount,
}) => {
  useEffect(() => {
    if (isSuccess && paymentData) {
      const newData = paymentData.map((el) => {
        return {
          title: el.groupName,
          payment: (
            <div className="flex items-center space-x-3">
              <PriceComponent cost={el.paid} />{" "}
              <span className="text-navyBlue">تومان</span>
            </div>
          ),
          invoice: el.paymentId,
          date: <DateComponent insertDate={el.insertDate} />,
          accept: el.accept ? (
            <TagsAccept text="پذیرفته شده" />
          ) : (
            <TagsNotAccept text="پذیرفته نشده" />
          ),
        };
      });
      setCovertedData(newData);
    }
  }, [isSuccess, paymentData]);
  console.log("dccdsc", paymentData);
  return (
    <div className="bg-white dark:bg-gray-800 w-full rounded-2xl mt-5">
      <div className=" w-full hidden sm:block">
        <Suspense
          fallback={
            <div className="w-full h-32 flex items-center justify-center">
              <Spin />
            </div>
          }
        >
          {isSuccess && (
            <TableComp
              pageNum={pageNum}
              setPageNum={setPageNum}
              itemPerPage={itemPerPage}
              paymentData={convertedData}
              totalCount={totalCount}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default TableHolder;
