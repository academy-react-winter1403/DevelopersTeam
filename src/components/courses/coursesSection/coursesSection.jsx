import React, { useEffect, useState } from "react";
import http from "../../../core/services/interceptor";
import CoursesNavbar from "../coursesNavbar/coursesNavbar";
import CardSection from "../cardSection/cardSection";
import FilterSection from "../filterSection/filterSection";
import { useQuery } from "@tanstack/react-query";
import { useQueryGet } from "../../../hooks/useQueryGet/useQueryGet";
import CourseCard from "../../common/course-card/courseCard";
import PaginationSection from "../../common/PaginationSection/paginationSection";

const CoursesSection = () => {
  // const { data } = useQueryGet(
  //   "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0",
  //   "courses"
  // );

  const [courseList, setCourseList] = useState(null);

  const [pageNum, setPageNum] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const numberOfPage =
    courseList && Math.ceil(courseList.totalCount / itemPerPage);

  const getList = async () => {
    const res = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${pageNum}&RowsOfPage=${itemPerPage}`
    );
    return res;
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["courses", pageNum, itemPerPage],
    queryFn: getList,
  });

  useEffect(() => {
    refetch();
  }, [pageNum, itemPerPage, refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="grid grid-cols-4 h-auto m-4 border-4 border-borderGray rounded-4xl">
      <div className="col-span-4 lg:col-span-3 w-full ">
        <CoursesNavbar />
        <div className="flex flex-wrap justify-evenly space-y-5 p-2">
          {data?.courseFilterDtos?.map((item, index) => {
            return (
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
      <div className="hidden lg:block p-8">
        <FilterSection />
      </div>
    </div>
  );
};

export default CoursesSection;
