import React from "react";
import axios from "axios";
import PadcastCard from "./padcastCard";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../common/cardSkeleton/cardSkeleton";
import LoadingDef from "./loadingDef";

const Padcast = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["podcasts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://taha-sepehr.liara.run/podcast/getAll`
      );
      return res.data;
    },
  });

  const AudioPlayer = ({ src }) => {
    return (
      <audio controls style={{ width: "100%" }}>
        <source src={src} type="audio/mp3" />
        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
      </audio>
    );
  };

  return (
    <div className=" flex flex-wrap justify-around space-y-6 w-11/12 m-auto mt-20 mb-10  border-4 border-borderGray dark:border-gray-700 rounded-4xl p-10">
      {isLoading && <LoadingDef isLoading={isLoading} />}

      {data?.data?.Dots?.map((item, index) => (
        <PadcastCard
          key={item.courseId || item.id || index}
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
