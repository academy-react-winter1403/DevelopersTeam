import React from "react";
import http from "../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import { GrShareOption } from "react-icons/gr";

const NewsCategory = ({ setSelectedCategory, data }) => {
  const handleChange = (value) => {
    setSelectedCategory(value);
  };
  const options = data?.news?.slice(1, 8).map((item) => ({
    label: item.newsCatregoryName,
    value: item.newsCatregoryId,
  }));

  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        <GrShareOption className="text-2xl" />
        دسته بندی
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

export default NewsCategory;
