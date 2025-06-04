import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Percent = ({ id }) => {
  const { data } = useQuery({
    queryKey: ["percents", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://taha-sepehr.liara.run/Exam/userByExamId/${id}`
      );
      return res.data;
    },
  });

  console.log("data?.data?.Percent", data?.data?.Percent);

  return <div>{data?.data?.Percent || "0"}%</div>;
};

export default Percent;
