import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailContainer from "./detailContainer/detailContainer";
import MoreInfo from "./moreInfo/moreInfo";
import http from "../../../core/services/interceptor";

const DetailSection = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState([]);
  const getCourseDetail = async () => {
    const res = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    setCourseDetail(res);
  };
  useEffect(() => {
    getCourseDetail();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row  justify-evenly h-auto mt-10  ">
      <MoreInfo courseDetail={courseDetail} />
      <DetailContainer courseDetail={courseDetail} />
    </div>
  );
};

export default DetailSection;
