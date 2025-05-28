import React, { useState } from "react";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import HwTableHolder from "./hwTable/tableHolder";

const HomeWork = () => {
  const [convertedData, setCovertedData] = useState([]);

  const { data, isSuccess } = useQuery({
    queryKey: ["homeworks"],
    queryFn: async () => {
      const res = await http.get(`/Session/StudentHomeworkList`);
      return res;
    },
  });

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl "> تکالیف من </h2>
      </div>

      <HwTableHolder
        data={data}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
      />
    </div>
  );
};

export default HomeWork;
