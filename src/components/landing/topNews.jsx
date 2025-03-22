import React from "react";
import http from '../../core/services/interceptor'
import NewsCard from "../common/news-card/newsCard";
import { useQuery } from "@tanstack/react-query";

const TopNews = () => {
  const getTopNews = async () => {
    const res = await http.get("/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC");
    return res;
  };

  const { data } = useQuery({
    queryKey: "topNews",
    queryFn: getTopNews,
  });
  return (
    <div>
      <h1 className="text-[25px]  h-10 mx-auto mt-8 indent-[650px] font-bold">
        اخبار و مقالات هفته
      </h1>
      <h6 className="text-[13px] mx-auto indent-[620px] h-10 text-gray-600">
        خبرها و مقاله هایی که دراین هفته منتشر شدند
      </h6>
      <div className="my-4 flex justify-center gap-4 mb-16">
        {data?.news.map((item) => {
          return (
           <NewsCard addUserProfileImage={item.addUserProfileImage} title={item.title} miniDescribe={item.miniDescribe} addUserFullName={item.addUserFullName}/>
          );
        })}
      </div>
    </div>
  );
};

export default TopNews;
