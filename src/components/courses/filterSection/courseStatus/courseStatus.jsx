import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import React from "react";
import { GrShareOption } from "react-icons/gr";
import http from "../../../../core/services/interceptor";

const CourseStatus = () => {
  const getList = async () => {
    const res = await http.get("/Status");
    return res;
  };

  const { data } = useQuery({
    queryKey: ["status"],
    queryFn: getList,
  });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const options =data?.slice(1, 5).map((item) =>({ label: item.levelName, value: item.levelName }));

  // console.log("status", data);

  return (
    <div className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm  flex items-center gap-2 ">
        <GrShareOption className="text-2xl" />
        شرایط برگزاری
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

export default CourseStatus;
