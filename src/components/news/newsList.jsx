import React, { useEffect, useState } from "react";
import http from "../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import FilterPartOfNews from "./filterPartOfSection";
import NewsItemCard from "./newsItemCard";
import PaginationSection from "../common/PaginationSection/paginationSection";
import NewsNavbar from "./newsNavbar";
import NewsIsLoading from "./newsIsLoading";

const NewsList = () => {
  const [pageNum, setPageNum] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);

  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getNewsList = async () => {
    const res = await http.get(
      `/News?PageNumber=${pageNum}&RowsOfPage=${itemPerPage}
      ${selectedCategory ? `&NewsCategoryId=${selectedCategory}` : ""}
      ${selectedSort ? `&SortingCol=${selectedSort.id}` : ""}
      ${searchQuery ? `&Query=${searchQuery}` : ""}
      `
    );
    return res;
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [
      "news-list",
      pageNum,
      itemPerPage,
      selectedSort,
      selectedCategory,
      searchQuery,
    ],
    queryFn: getNewsList,
  });

  useEffect(() => {
    refetch();
  }, [pageNum, itemPerPage, refetch]);

  return (
    <div className="grid grid-cols-4 h-auto m-4 border-4 border-borderGray rounded-4xl">
      <div className="col-span-4 lg:col-span-3 w-full">
        <NewsNavbar
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
        <NewsIsLoading isLoading={isLoading} />
        <div>
          {data?.news.map((item, index) => {
            return (
              <NewsItemCard
                key={item.id}
                addUserProfileImage={item.addUserProfileImage}
                title={item.title}
                miniDescribe={item.miniDescribe}
                addUserFullName={item.addUserFullName}
                lastUpdate={item.lastUpdate}
                insertDate={item.insertDate}
                currentDissLikeCount={item.currentDissLikeCount}
                currentLikeCount={item.currentLikeCount}
                id={item.id}
                currentUserIsLike={item.currentUserIsLike}
                currentUserIsDissLike={item.currentUserIsDissLike}
                likeId={item.likeId}
              />
            );
          })}
        </div>
        <PaginationSection
          totalCount={data?.totalCount}
          pageNum={pageNum}
          itemPerPage={itemPerPage}
          setPageNum={setPageNum}
        />
      </div>
      <div className="hidden md:block p-8">
        <FilterPartOfNews
          setSelectedCategory={setSelectedCategory}
          data={data}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default NewsList;
