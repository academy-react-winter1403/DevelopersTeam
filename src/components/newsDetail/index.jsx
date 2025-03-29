import React, { useEffect, useState } from "react";
import http from "../../core/services/interceptor";
import { useParams } from "react-router-dom";

const getNewsDetailList = () => {
  const [detail, setDetail] = useState(null);
  const params = useParams();

  const getNewsDetail = async () => {
    const res = await http.get(
      `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC/${params.id}`
    );
    setDetail(res.data);
  };

  useEffect(() => {
    getNewsDetail();
  }, []);

  return (
    <div className="grid grid-cols-4  m-4 border-4 border-borderGray rounded-4xl h-96">
      <div>
        <h2>{detail?.addUserProfileImage}</h2>
        <h2>{detail?.title}</h2>
        <h2>{detail?.miniDescribe}</h2>
        <h2>{detail?.addUserFullName}</h2>
        <h2>{detail?.insertDate}</h2>
      </div>
    </div>
  );
};

export default getNewsDetailList;
