import React, { lazy, Suspense, useEffect, useState } from "react";
// const TableBody = lazy(() => import("./tableTopCourses"));
import http from "./../../.././../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import TableBody from "./tableBody";
import { IoMdClose } from "react-icons/io";

const TableFaveCourseHandle = () => {
  const [convertedData, setCovertedData] = useState([]);

  const getFavCourses = async () => {
    const res = await http.get(`/SharePanel/GetMyFavoriteCourses`);
    return res;
  };
  const icons = <div className="flex gap-5">
    <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
    <IoMdClose className="w-6 h-6 text-red-500"/>
  </div>

  const { data, isSuccess } = useQuery({
    queryKey: "favCoursesPanel",
    queryFn: getFavCourses,
  });
  useEffect(() => {
    if (isSuccess) {
      const i = data.favoriteCourseDto.map((el) => {
        let newData = {};
        newData["img"] = el.tumbImageAddress;
        newData["name"] = el.courseTitle;
        newData["teacher"] = el.teacheName;
        newData["date"] = <DateComponent insertDate={el.lastUpdate} />;
        newData["price"] = "15000000";
        newData["eye"] = (icons);
        return newData;
      });
      setCovertedData(i);
    }
  }, [isSuccess]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-70">
          <Suspense fallback={<h1>loading...</h1>}>
            {isSuccess && <TableBody data={convertedData} />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TableFaveCourseHandle;
