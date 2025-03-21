import React from "react";
import NewsCard from "../common/news-card/newsCard";
import { useQuery } from "@tanstack/react-query";

const TopNews = () => {
  const getTopNews = async () => {
    const res = await http.get("/News/GetListNewsCategory");
    return res;
  };

  const { data } = useQuery({
    queryKey: "topNews",
    queryFn: getTopNews,
  });
  return (
    <div>
      <h1 className="text-[25px]  h-10 mx-auto mt-16 indent-[650px]">
        اخبار و مقالات هفته
      </h1>
      <h6 className="text-[13px] mx-auto indent-[620px] h-10 text-gray-600">
        خبرها و مقاله هایی که دراین هفته منتشر شدند
      </h6>
      <div className=" h-96 my-4 flex justify-center gap-4 border-2">
        {data?.slice(1.5).map((item) => {
          return (
           <NewsCard image={item.image} googleTitle={item.googleTitle} googleDescribe={item.googleDescribe} iconName={item.iconName}/>
          );
        })}
      </div>
    </div>
  );
};

export default TopNews;
