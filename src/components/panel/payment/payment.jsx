import React, { useState } from "react";
import TableHolder from "./paymentTable/tableHolder";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";

const Payment = () => {
  const [convertedData, setCovertedData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);

  const { data: myCourseData } = useQuery({
    queryKey: ["myCoursesPanel", pageNum, itemPerPage],
    queryFn: async () => {
      const res = await http.get(
        `/SharePanel/GetMyCourses?PageNumber=${pageNum}&RowsOfPage=${itemPerPage}&SortingCol=DESC&SortType=LastUpdate`
      );
      return res;
    },
  });

  const getCoursesId = () => {
    const courseIds = [];
    myCourseData?.listOfMyCourses?.forEach((course) => {
      if (course.courseId) {
        courseIds.push(course.courseId);
      }
    });
    return courseIds;
  };

  const getPayment = async () => {
    const courseIds = getCoursesId();
    const paymentData = await Promise.all(
      courseIds.map((courseId) =>
        http.get(`/CoursePayment/StudentUserPayList?CourseId=${courseId}`)
      )
    );
    return paymentData.flatMap((res) => res);
  };

  const {
    data: paymentData,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["paymentList", pageNum, itemPerPage],
    queryFn: getPayment,
    enabled: !!myCourseData,
  });

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">تراکنش های من</h2>
      </div>
      <TableHolder
        paymentData={paymentData}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
        pageNum={pageNum}
        setPageNum={setPageNum}
        itemPerPage={itemPerPage}
        totalCount={myCourseData?.totalCount}
      />
    </div>
  );
};

export default Payment;
