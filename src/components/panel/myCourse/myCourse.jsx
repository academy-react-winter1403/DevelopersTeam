import React, { useEffect, useState } from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableMyCoursesHolder from "./tableMyCourses/tableMyCoursesHolder";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";

const MyCourse = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [convertedData, setCovertedData] = useState([]);

  const getMyCourses = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate ${
        searchQuery ? `&Query=${searchQuery}` : ""
      }`
    );
    return res;
  };
  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["myCoursesPanel", searchQuery],
    queryFn: getMyCourses,
  });

  useEffect(() => {
    refetch();
  }, [searchQuery]);

  return (
    <div>
      <div>
        <h2 className="w-full h-10  mt-5 font-bold text-xl">دوره من</h2>
      </div>
      <FavBottomCourse
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TableMyCoursesHolder
        data={data}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default MyCourse;
