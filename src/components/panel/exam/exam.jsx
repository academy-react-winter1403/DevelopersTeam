import React, { useEffect, useState } from "react";
import TableExamHolder from "./tableExam/tableExamHolder";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
 
const Exam = () => {
  const [convertedData, setCovertedData] = useState([]);

  const getMyExam = async () => {
    const res = await axios.get(`https://taha-sepehr.liara.run/Exam/exam`);
    return res.data;
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["myExam"],
    queryFn: getMyExam,
    keepPreviousData: true,
  });

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">آزمون های من</h2>
      </div>
      <TableExamHolder
        data={data?.data}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
      />
    </div>
  );
};

export default Exam;
