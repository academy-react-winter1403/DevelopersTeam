import React from "react";
import { FiSearch } from "react-icons/fi";
import FilterSearchInput from "../courses/filterSearchInput/filterSearchInput";
import NewsCategory from "./newsCategory";
import { RxCross2 } from "react-icons/rx";
import { Button } from "antd";

const FilterPartOfNews = ({ setSelectedCategory, data, setSearchQuery,searchQuery }) => {
  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
  };
  return (
    <div className="w-full h-[250px] bg-lightGray rounded-3xl pt-4 space-y-4 sticky top-5">
      <FilterSearchInput
        icon={<FiSearch className="text-2xl" />}
        inputLabel={"جست‌جو دوره"}
        placeholder={"جست جو کنید ..."}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <NewsCategory setSelectedCategory={setSelectedCategory} data={data} />{" "}
      <Button
        shape="round"
        icon={<RxCross2 className="text-lg" />}
        style={{ fontFamily: "yekan", marginRight: "17px" }}
        danger
        onClick={handleReset}
      >
        حذف
      </Button>
    </div>
  );
};

export default FilterPartOfNews;
