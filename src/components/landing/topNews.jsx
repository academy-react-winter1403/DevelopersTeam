import React from "react";
import http from "../../core/services/interceptor";
import NewsCard from "../common/news-card/newsCard";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TopNews = () => {
  const { t } = useTranslation();

  const getTopNews = async () => {
    const res = await http.get(
      "/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC"
    );
    return res;
  };

  const { data } = useQuery({
    queryKey: ["topNews"],
    queryFn: getTopNews,
  });

  return (
    <div className="container mx-auto px-4 mt-[80px] sm:px-6 sm:mt-16 lg:px-8">
      <motion.h1
        className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl dark:text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t("News and articles of the week")}
      </motion.h1>

      <motion.h6
        className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] dark:text-gray-400 xl:text-[15px]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        {t("News and articles published this week")}
      </motion.h6>

      <motion.div
        className="flex flex-wrap justify-center gap-y-4 my-8 w-[100%] mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4 }}
      >
        {data?.news?.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]"
          >
            <NewsCard
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopNews;
