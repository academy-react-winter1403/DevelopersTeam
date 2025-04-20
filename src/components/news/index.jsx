import React from "react";
import HeroSectionNews from "./heroSectionNews";
import NewsList from "./newsList";

const News = () => {
  return (
    <div className="sm:mx-14 mb-4">
      <HeroSectionNews />
      <NewsList />
    </div>
  );
};

export default News;
