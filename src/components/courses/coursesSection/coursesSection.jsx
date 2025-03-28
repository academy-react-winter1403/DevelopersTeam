import React, { useEffect, useState } from "react";
import http from "../../../core/services/interceptor";
import CoursesNavbar from "../coursesNavbar/coursesNavbar";
import CardSection from "../cardSection/cardSection";
import { useQuery } from "@tanstack/react-query";
import { useQueryGet } from "../../../hooks/useQueryGet/useQueryGet";
import CourseCard from "../../common/course-card/courseCard";
import PaginationSection from "../../common/PaginationSection/paginationSection";
import GridCourseCard from "../gridCourseCard/gridCourseCard";
import NewsItemCard from "../../news/newsItemCard";
import FilterSection from "../filterSection";
import CardSkeleton from "../../common/cardSkeleton/cardSkeleton";
import GridCarsSkeleton from "../../common/gridCarsSkeleton/gridCarsSkeleton";

const CoursesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const [pageNum, setPageNum] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(9);

  const { data, isLoading, isError, refetch } = useQueryGet(
    `/Home/GetCoursesWithPagination?PageNumber=${pageNum}&RowsOfPage=${itemPerPage}${
      (searchQuery ? `&Query=${searchQuery}` : "",
      selectedType ? `&SortingCol=${selectedType}` : "")
    }`,
    "courses",
    [pageNum, itemPerPage, searchQuery, selectedType]
  );

  useEffect(() => {
    refetch();
  }, [pageNum, itemPerPage, searchQuery, selectedType, refetch]);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error fetching data</div>;

  // console.log("data", data?.courseFilterDtos);
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="grid grid-cols-4 h-auto m-4 border-4 border-borderGray rounded-4xl">
      <div className="col-span-4 lg:col-span-3 w-full ">
        <CoursesNavbar viewMode={viewMode} setViewMode={setViewMode} />{" "}
        <div className="flex flex-wrap justify-evenly space-y-5 p-2 ">
          {isLoading &&
            Array.from({ length: 9 }).map((_, index) =>
              viewMode === "list" ? (
                <CardSkeleton key={index} />
              ) : (
                <GridCarsSkeleton key={index} />
              )
            )}
        </div>
        <div className="flex flex-wrap justify-evenly space-y-5 p-2 ">
          {data?.courseFilterDtos?.map((item, index) =>
            viewMode === "list" ? (
              <CourseCard
                key={index}
                title={item.title}
                img={item.tumbImageAddress}
                describe={item.describe}
                teacherName={item.teacherName}
                statusName={item.statusName}
                student={item.commandCount}
                cost={item.cost}
                likeCount={item.likeCount}
                dissLikeCount={item.dissLikeCount}
              />
            ) : (
              <GridCourseCard
                key={index}
                title={item.title}
                img={item.tumbImageAddress}
                describe={item.describe}
                teacherName={item.teacherName}
                statusName={item.statusName}
                student={item.commandCount}
                cost={item.cost}
                likeCount={item.likeCount}
                dissLikeCount={item.dissLikeCount}
              />
            )
          )}
        </div>
        <PaginationSection
          totalCount={data?.totalCount}
          pageNum={pageNum}
          itemPerPage={itemPerPage}
          setPageNum={setPageNum}
        />
      </div>
      <div className="hidden lg:block p-8 xl:py-8 xl:px-3">
        <FilterSection
          setSearchQuery={setSearchQuery}
          setSelectedType={setSelectedType}
        />
      </div>
    </div>
  );
};

export default CoursesSection;
