import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["tests", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://taha-sepehr.liara.run/Exam/exam/${id}`
      );
      return res.data;
    },
  });

  const tests = data?.data.tests;

  return <div>Test</div>;
};

export default Test;
