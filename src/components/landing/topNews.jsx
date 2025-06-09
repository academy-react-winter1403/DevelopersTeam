import React from "react";
import http from "../../core/services/interceptor";
import NewsCard from "../common/news-card/newsCard";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const TopNews = () => {
  const { t, i18n } = useTranslation();

  const getTopNews = async () => {
    const res = await http.get(
      "/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC"
    );
    return res;
  };

  const { data } = useQuery({
    queryKey:[ "topNews"],
    queryFn: getTopNews,
  });

  return (
    <div className="container mx-auto px-4 mt-[80px] sm:px-6 sm:mt-16 lg:px-8">
      <h1 className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl dark:text-white">
        {t("News and articles of the week")}
      </h1>
      <h6 className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] dark:text-gray-400 xl:text-[15px]">
        {t("News and articles published this week")}
       
      </h6>
      <div className="flex flex-wrap justify-center gap-y-4  my-8  w-[100%] mx-auto">
        {data?.news.map((item) => (
          <NewsCard
            key={item.id}
            addUserProfileImage={item.addUserProfileImage}
            title={item.title}
            miniDescribe={item.miniDescribe}
            addUserFullName={item.addUserFullName}
            id={item.id}
            currentLikeCount={item.currentLikeCount}
            currentDissLikeCount={item.currentDissLikeCount}
            currentUserIsLike={item.currentUserIsLike}
            currentUserIsDissLike={item.currentUserIsDissLike}
            likeId={item.likeId}
            keyword={item.newsCatregoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default TopNews;