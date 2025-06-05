import React, { useEffect, useState } from "react";
import DetailContainer from "./detailContainer/detailContainer";
import MoreInfo from "./moreInfo/moreInfo";
import http from "../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";

const DetailSection = ({ id }) => {
  const getCourseDetail = async () => {
    const res = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return res;
  };

  const { data, refetch } = useQuery({
    queryKey: ["courseDetail", id],
    queryFn: getCourseDetail,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [id, refetch]);

  return (
    <div className="flex flex-col lg:flex-row  justify-evenly h-auto mt-10  ">
      <MoreInfo data={data} />
      <DetailContainer data={data} id={id} />
    </div>
  );
};

export default DetailSection;
