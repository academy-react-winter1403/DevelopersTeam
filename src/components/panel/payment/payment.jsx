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
  console.log(myCourseData);

  //   console.log(paymentData);

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">تراکنش های من</h2>
      </div>
      <TableHolder courseId={myCourseData?.listOfMyCourses} />
    </div>
  );
};

export default Payment;
