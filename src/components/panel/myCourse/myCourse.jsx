import React, { useEffect, useState } from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableMyCoursesHolder from "./tableMyCourses/tableMyCoursesHolder";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";

const MyCourse = () => {
  const [convertedData, setCovertedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getMyCourses = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate`
    );
    return res;
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["myCoursesPanel"],
    queryFn: getMyCourses,
  });

  const [filteredData, setFilteredData] = useState(null);

  // Initialize filteredData when data is loaded
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!data) return; // Don't proceed if data isn't loaded yet

    if (!query.trim()) {
      // If search is empty, reset to original data
      setFilteredData(data);
      return;
    }

    // Filter courses while maintaining the original data structure
    const filteredCourses = data.listOfMyCourses.filter((item) =>
      item.courseTitle.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData({
      ...data, // Keep all original properties
      listOfMyCourses: filteredCourses,
      totalCount: filteredCourses.length,
    });
  };

  return (
    <div>
      <div>
        <h2 className="w-full h-10 mt-5 font-bold text-xl">دوره من</h2>
      </div>
      <FavBottomCourse handleSearch={handleSearch} />
      {filteredData && (
        <TableMyCoursesHolder
          data={filteredData}
          convertedData={convertedData}
          setCovertedData={setCovertedData}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default MyCourse;
