import React, { useState } from "react";
import http from "./../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import HwTableHolder from "./hwTable/tableHolder";

const SessionDetail = ({ id }) => {
  const [convertedData, setCovertedData] = useState([]);

  const { data, isSuccess } = useQuery({
    queryKey: ["sessionDetail"],
    queryFn: async () => {
      const res = await http.get(`/Session/SessionDetail?SessionId=${id}`);
      return res;
    },
  });

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl "> جزییات جلسه</h2>
      </div>

      {/* <HwTableHolder
        data={data}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
      /> */}
    </div>
  );
};

export default SessionDetail;
