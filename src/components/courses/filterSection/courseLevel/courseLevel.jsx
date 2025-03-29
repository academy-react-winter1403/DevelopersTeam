import React from "react";
import { IoLayersOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import http from "../../../../core/services/interceptor";
import { Select } from "antd";

const CourseLevel = ({setSelectedLevel}) => {

  const getList = async () => {
    const res = await http.get("/CourseLevel/GetAllCourseLevel");
    return res;
  };

  const { data } = useQuery({
    queryKey: ["CourseLevel"],
    queryFn: () => getList(),
  });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedLevel(value)
  };

  const options = data?.slice(1,15).map((item) => ({ label: item.levelName, value: item.id }));

  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        <IoLayersOutline className="text-2xl" />
        سطح آموزشی
      </div>
      <Select
        mode="tags"
        style={{
          width: "100%",
          fontFamily: "yekan",
          fontSize: "12px",
        }}
        placeholder="انتخاب کنید"
        onChange={handleChange}
        dropdownStyle={{ fontFamily: "yekan" }}
        options={options}
      />
    </div>
  );
};

export default CourseLevel;
