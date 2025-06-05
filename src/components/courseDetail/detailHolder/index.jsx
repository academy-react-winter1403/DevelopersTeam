import React from "react";
import DetailSection from "../detailSection/detailSection";
import MoreCourses from "../moreCourses/moreCourses";
import { useParams } from "react-router-dom";

const DetailHolder = () => {
  const { id } = useParams();
  return (
    <div>
      <DetailSection id={id} />
      <MoreCourses id={id} />
    </div>
  );
};

export default DetailHolder;
