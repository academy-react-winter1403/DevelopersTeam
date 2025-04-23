import React from "react";
import TableHolder from "./paymentTable/tableHolder";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";

const Payment = () => {
  const { data: myCourseData } = useQuery({
    queryKey: ["myCoursesPanel"],
    queryFn: async () => {
      const res = await http.get(
        `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate`
      );
      return res;
    },
  });

  const getPayment = async () => {
    const res = await http.get(
      `/CoursePayment/StudentUserPayList?CourseId=${myCourseData?.listOfMyCourses.courseId}`
    );
    return res;
  };
  const { data: paymentData } = useQuery({
    queryKey: ["paymentList"],
    queryFn: getPayment,
  });

  const { data: paymentDataDetail } = useQuery({
    queryKey: ["paymentDetail"],
    queryFn: async () => {
      const res = await http.get(`/CoursePayment/${paymentData?.paymentId}`);
      return res;
    },
  });
  console.log("paymentData", paymentData);

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">تراکنش های من</h2>
      </div>

      {paymentData?.map((item) => {
        <div>{item.paid}</div>;
      })}
      {/* <TableHolder courseId={myCourseData?.listOfMyCourses} /> */}
    </div>
  );
};

export default Payment;
