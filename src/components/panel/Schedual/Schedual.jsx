import React, { useState } from "react";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import SchedualBottom from "./SchedualBottom";
import TableHolder from "./SchedualTable/tableHolder";

const Schedual = () => {
  const [convertedData, setCovertedData] = useState([]);

  const getSchedual = async () => {
    const res = await http.get(`/Schedual/GetStudentScheduals?startDate=05/05/1753&endDate=05/05/9999&StudentId=40330`);
    return res;
  };
  const { data, isSuccess } = useQuery({
    queryKey: ["SchedualPanel"],
    queryFn: getSchedual,
  });

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl ">  اسکژول </h2>
      </div>
      <div className="flex justify-between items-end">
        <SchedualBottom />
      </div>
      <TableHolder
        data={data}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
      />
    </div>
  );
};

export default Schedual;
