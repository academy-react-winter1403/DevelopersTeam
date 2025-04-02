import React from "react";
import { Select } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const SelectDropdown = ({ icon, inputLabel, name, placeholder, data , type }) => {
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };

  const courseTypeOptions =
    data?.map((item) => ({
      value: item.typeName,
      label: item.typeName,
    })) || [];

  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        {icon}
        {inputLabel}
      </div>
      <Select
        mode="tags"
        style={{
          width: "100%",
          fontFamily: "yekan",
          fontSize: "12px",
        }}
        placeholder={placeholder}
        onChange={handleChange}
        dropdownStyle={{ fontFamily: "yekan" }}
        options={courseTypeOptions}
      />
    </div>
  );
};

export default SelectDropdown;
