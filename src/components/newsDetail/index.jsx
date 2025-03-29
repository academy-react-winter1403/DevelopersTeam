import React, { useEffect, useState } from "react";
import http from "../../core/services/interceptor";
import { useParams } from "react-router-dom";

const GetNewsDetailList = () => {
  const [detail, setDetail] = useState(null);
  const {id} = useParams();

  const getNewsDetail = async () => {
    const res = await http.get(
      `/News/${id}`
    );
    setDetail(res.detailsNewsDto);
    console.log("res",res);
  };

  useEffect(() => {
    getNewsDetail();
  }, []);

  console.log("ddd",detail);
  return (
    <div className="grid grid-cols-4  m-4 border-4 border-borderGray rounded-4xl h-96">
      <div className="border">

        <h2>{detail?.addUserProfileImage}</h2>
        <h2>{detail?.title}</h2>
        <h2>{detail?.miniDescribe}</h2>
        <h2>{detail?.addUserFullName}</h2>
        <h2>{detail?.insertDate}</h2>
      </div>
    </div>
  );
};

export default GetNewsDetailList;
