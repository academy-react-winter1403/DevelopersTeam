import React, { useEffect, useState } from "react";
import FavBottomCourse from "./favBottomCourse";
import TableFaveCourseHandle from "./tableFavCourse/tableFaveCourseHandle";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import Provider from "./Provider";

const FavCourse = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getFavCourse = async () => {
    const res = await http.get(`/SharePanel/GetMyFavoriteCourses`);
    return res;
  };
  const { data } = useQuery({
    queryKey: ["favCoursesPanel"],
    queryFn: getFavCourse,
  });

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!data) return;
    if (!query.trim()) {
      setFilteredData(data);
      return;
    }

    const filteredFavCourse = data.favoriteCourseDto.filter((item) =>
      item.courseTitle.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData({
      ...data,
      favoriteCourseDto: filteredFavCourse,
      totalCount: filteredFavCourse.length,
    });
  };

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl ">
          علاقه مندی دوره ها
        </h2>
      </div>
      <FavBottomCourse handleSearch={handleSearch} />
      <Provider data={filteredData || data} />
    </div>
  );
};

export default FavCourse;
