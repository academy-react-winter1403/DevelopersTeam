import React from "react";
import { Select } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const SelectDropdown = ({ icon, inputLabel, name, placeholder }) => {
  //   const options = [];
  //   for (let i = 10; i < 36; i++) {
  //     options.push({
  //       value: i.toString(36) + i,
  //       label: i.toString(36) + i,
  //     });
  //   }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
        // options={options}
      />
    </div>
  );
};

export default SelectDropdown;
