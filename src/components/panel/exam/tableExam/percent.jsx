import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  TagsAccept,
  TagsNotAccept,
  TagsWaiting,
} from "../../tagStatus/tagStatus";

const Percent = ({ id, isStatus }) => {
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

  return (
    <div>
      {isStatus ? (
        data?.data?.Percent > 0 ? (
          <TagsAccept text="تکمیل شده" />
        ) : (
          <TagsNotAccept text="تکمیل نشده" />
        )
      ) : (
        <div>{data?.data?.Percent || "0"}%</div>
      )}
    </div>
  );
};

export default Percent;
