import React, { useEffect, useState } from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import SortMyReserve from "./sortMyReserve";
import TableMyReserveCoursesHolder from "./tableMyReserveCourses/tableMyReserveCoursesHolder";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../core/services/interceptor";
import Provider from "./Provider";

const MyReserveCourse = () => {
  const [convertedData, setCovertedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const getMyReserveCourses = async () => {
    const res = await http.get(`/SharePanel/GetMyCoursesReserve`);
    return res;
  };
  const {
    data: reserveData,
    isSuccess,
    error: reserveDataError,
  } = useQuery({
    queryKey: ["myReserveCoursesPanel"],
    queryFn: getMyReserveCourses,
  });

  useEffect(() => {
    if (reserveData) {
      setFilteredData(reserveData);
    }
  }, [reserveData]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!reserveData) return;

    if (!query.trim()) {
      setFilteredData(reserveData);
      return;
    }

    const filteredCourses = reserveData.filter((item) =>
      item.courseName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredCourses);
  };

  const getMyReserveCoursesMore = async () => {
    const res = await http.get(
      `/Home/GetCourseDetails?CourseId=${data?.courseId}`
    );
    return res;
  };
  const { data: moreData, error: moreDataError } = useQuery({
    queryKey: "myReserveCoursesPanelMore",
    queryFn: getMyReserveCoursesMore,
  });

  const [combinedData, setCombinedData] = useState([]);

  if (reserveData && moreData) {
    setCombinedData(...reserveData, ...moreData);
  }

  // if (firstLoading || secondLoading) return <div>Loading...</div>;
  // if (reserveDataError || moreDataError) return <div>Error loading data</div>;   

  function convertData() {
    for (let index = 0; index < array.length; index++) {
      const element = moreData[index];
      const res = http.get(`/Home/GetCourseDetails?CourseId=${data?.courseId}`);
    }
  }

  // console.log("moreData", moreData);

  return (
    <div className="">
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">رزرو من</h2>
      </div>
      <div className="flex items-center">
        <div>
          <FavBottomCourse handleSearch={handleSearch} />
        </div>
        <div className="pt-14">
          <SortMyReserve />
        </div>
      </div>
      <Provider data={filteredData || reserveData} />
    </div>
  );
};

export default MyReserveCourse;
