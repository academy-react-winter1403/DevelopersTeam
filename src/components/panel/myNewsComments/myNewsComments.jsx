import React, { useState } from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableHolderNews from "./table/tableHolderNews";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";

const MyNewsComments = () => {
  const [convertedData, setCovertedData] = useState([]);

  const getMyNewsComment = async () => {
    const res = await http.get(`/SharePanel/GetMyNewsComments`);
    return res;
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["myNewsComment"],
    queryFn: getMyNewsComment,
  });
  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">کامنت های مقالات</h2>
      </div>
      <TableHolderNews
        data={data}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
      />
    </div>
  );
};

export default MyNewsComments;
