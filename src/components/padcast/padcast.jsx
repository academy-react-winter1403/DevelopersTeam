import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../common/cardSkeleton/cardSkeleton";
import LoadingDef from "./loadingDef";
import PadcastCard from "./padcastCard";

const Padcast = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["podcasts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://taha-sepehr.liara.run/podcast/getAll"
      );
      return res.data;
    },
  });

  console.log(data);

  const podcasts = data?.data?.Dots || [];

  return (
    <div className="flex flex-wrap gap-1 justify-around space-y-6 w-11/12 m-auto mt-20 mb-10 border-4 border-borderGray dark:border-gray-700 rounded-4xl p-10">
      {isLoading &&
        Array.from({ length: 4 }).map((_, idx) => <CardSkeleton key={idx} />)}

      {!isLoading && podcasts.length === 0 && (
        <p className="text-center text-gray-600">هیچ پادکستی یافت نشد.</p>
      )}

      {podcasts.map((item) => (
        <PadcastCard
          key={item.id}
          title={item.title}
          img={item.imageLink}
          describe={item.miniDesc}
          teacherName={item.creator}
          Category={item.Category}
          FileLink={item.FileLink}
          allLike={item.allLike}
          allDissLike={item.allDissLike}
          InsertTime={item.InsertTime}
          id={item.id}
          isLike={item.isLike}
          isDissLike={item.isDissLike}
        />
      ))}
    </div>
  );
};

export default Padcast;
