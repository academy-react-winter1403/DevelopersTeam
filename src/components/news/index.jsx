import React from "react";
import HeroSectionNews from "./heroSectionNews";
import NewsList from "./newsList";
import FilterPartOfNews from "./filterPartOfSection";

const News = () => {
  return (
    <div>
      <HeroSectionNews />
      <NewsList />
      <FilterPartOfNews/>
    </div>
  );
};

export default News;
