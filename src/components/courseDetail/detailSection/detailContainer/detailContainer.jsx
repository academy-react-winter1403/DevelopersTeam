import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "./../../../../core/services/interceptor";

const DetailContainer = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState([]);
  const getCourseDetail = async () => {
    const res = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    setCourseDetail(res.courseFilterDtos);
  };
  useEffect(() => {
    getCourseDetail();
  }, []);

  return (
    <div>
      <h1>{courseDetail?.title}</h1>
    </div>
  );
};

export default DetailContainer;
