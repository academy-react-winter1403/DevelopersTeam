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
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate`
    );
    return res;
  };
  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["myCoursesPanel"],
    queryFn: getMyCourses,
  });

  const [SearchList, setSearchList] = useState(null);
  useEffect(() => {
    if (data) {
      setSearchList(data);
    }
  }, [data]);
  const handleSearch = (e) => {
    const newArr = SearchList.filter((item) =>
      data?.courseTitle.includes(e.target.value)
    );
    setSearchList(newArr);
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <h2 className="w-full h-10  mt-5 font-bold text-xl">دوره من</h2>
      </div>
      <FavBottomCourse
        data={data}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
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
