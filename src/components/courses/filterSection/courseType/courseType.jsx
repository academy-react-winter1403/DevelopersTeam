import React from "react";
import SelectDropdown from "../../selectDropdown/selectDropdown";
import { GrShareOption } from "react-icons/gr";
import http from "../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";

const CourseType = ({ setSelectedType }) => {
  const getList = async () => {
    const res = await http.get(`/CourseType/GetCourseTypes/`);
    return res;
  };

  const { data } = useQuery({
    queryKey: ["CourseType"],
    queryFn: () => getList(),
  });

  const handleChange = (value) => {
    setSelectedType(value);
  };

  const options = data?.map((item) => ({
    label: item.typeName,
    value: item.id,
  }));

  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        <GrShareOption className="text-2xl" />
        نحوه برگزاری
      </div>
      <Select
        style={{
          width: "100%",
          fontFamily: "yekan",
          fontSize: "12px",
        }}
        placeholder="انتخاب کنید"
        onChange={handleChange}
        dropdownStyle={{ fontFamily: "yekan" }}
        options={options}
        allowClear
      />
    </div>
  );
};

export default CourseType;
