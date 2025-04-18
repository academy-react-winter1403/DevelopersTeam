import React from "react";
import { Suspense } from "react";
import { Spin } from "antd";
import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
const TableComp = lazy(() => import("./tableComp"));

const TableHolder = ({ courseId }) => {
  const { data: paymentData, isSuccess } = useQuery({
    queryKey: ["paymentList"],
    queryFn: async () => {
      const res = await http.get(
        `/CoursePayment/5707a9ad-25a8-ef11-b6ec-c346d1edb340`
      );
      return res;
    },
  });
  console.log(paymentData);
  return (
    <div className="bg-white rounded-2xl h-auto">
      <div>
        <table>
          <thead>
            <th>نام دوره</th>
            <th>تاریخ پرداخت</th>
            <th>شماره پرداخت</th>
            <th> مبلغ پرداختی</th>
          </thead>
          {/* {paymentData?.map((item) => {
            return (
              <tbody>
                <th>{item.title}</th>
                <th>{item.peymentDate}</th>
                <th>{item.paymentInvoiceNumber}</th>
                <th>{item.paid}</th>
              </tbody>
            );
          })} */}
        </table>
      </div>
    </div>
  );
};

export default TableHolder;
