import React, { useState } from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import SortMyReserve from "./sortMyReserve";
import TableMyReserveCoursesHolder from "./tableMyReserveCourses/tableMyReserveCoursesHolder";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";

const MyReserveCourse = () => {
  const [convertedData, setCovertedData] = useState([]);

  const getMyReserveCourses = async () => {
    const res = await http.get(`/SharePanel/GetMyCoursesReserve`);
    return res;
  };
  const { data, isSuccess } = useQuery({
    queryKey: "myReserveCoursesPanel",
    queryFn: getMyReserveCourses,
  });
  return (
    <div>
      <div>
        <h2 className="w-full h-10  mt-5 font-bold text-xl">رزرو من</h2>
      </div>
      <div className="flex items-center">
        <div>
          <FavBottomCourse />
        </div>
        <div className="pt-14">
          <SortMyReserve />
        </div>
      </div>
      <TableMyReserveCoursesHolder
        convertedData={convertedData}
        setCovertedData={setCovertedData}
        data={data}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default MyReserveCourse;
