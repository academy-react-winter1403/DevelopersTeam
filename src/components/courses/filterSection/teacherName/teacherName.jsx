import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import React from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import http from "../../../../core/services/interceptor";

const TeacherName = () => {
  const getList = async () => {
    const res = await http.get("/Home/GetTeachers");
    return res;
  };

  const { data } = useQuery({
    queryKey: ["GetTeachers"],
    queryFn: () => getList(),
  });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };



    const options =data?.slice(1, 10).map((item) =>({ label: item.fullName, value: item.fullName }));

  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        <LiaChalkboardTeacherSolid className="text-2xl" />
        اساتید
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

export default TeacherName;
