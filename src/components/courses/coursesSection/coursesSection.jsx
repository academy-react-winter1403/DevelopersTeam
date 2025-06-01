import React, { useEffect, useState } from "react";
import CoursesNavbar from "../coursesNavbar/coursesNavbar";
import { useQueryGet } from "../../../hooks/useQueryGet/useQueryGet";
import FilterSection from "../filterSection";
import IsLoadingComponent from "./isLoadingComponent/isLoadingComponent";
import ViewMoodComponent from "./viewMoodComponent/viewMoodComponent";
import PaginationSection from "../../common/paginationSection/paginationSection";

const CoursesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  const [selectedPriceMin, setSelectedPriceMin] = useState(100);
  const [selectedPriceMax, setSelectedPriceMax] = useState(50000000);

  const [pageNum, setPageNum] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(9);

  const [viewMode, setViewMode] = useState("list");

  const { data, isLoading, isError, refetch } = useQueryGet(
    `/Home/GetCoursesWithPagination?PageNumber=${pageNum}&SortType=Active&RowsOfPage=${itemPerPage}

    ${selectedType ? `&CourseTypeId=${selectedType}` : ""}
    ${selectedLevel ? `&courseLevelId=${selectedLevel}` : ""}
    ${selectedTeacher ? `&TeacherId=${selectedTeacher}` : ""}
    ${
      selectedTech && selectedTech.length > 0
        ? `&ListTech=${selectedTech}&TechCount=1`
        : ""
    }    
    ${selectedPriceMin ? `&CostDown=${selectedPriceMin}` : ""}
    ${selectedPriceMax ? `&CostUp=${selectedPriceMax}` : ""}
    ${selectedSort ? `&SortingCol=${selectedSort.id}` : ""}
        ${searchQuery ? `&Query=${searchQuery}` : ""}
    `,
    "courses",
    [
      pageNum,
      itemPerPage,
      searchQuery,
      selectedType,
      selectedLevel,
      selectedTech,
      selectedTeacher,
      selectedPriceMin,
      selectedPriceMax,
    ]
  );

  useEffect(() => {
    refetch();
  }, [
    pageNum,
    itemPerPage,
    searchQuery,
    selectedType,
    refetch,
    selectedLevel,
    selectedSort,
    selectedTech,
    selectedTeacher,
    selectedPriceMin,
    selectedPriceMax,
  ]);

  return (
    <div className="grid grid-cols-4 h-auto m-4 border-4 border-borderGray dark:border-gray-700 rounded-4xl ">
      <div className="col-span-4 lg:col-span-3 w-full ">
        <CoursesNavbar
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          viewMode={viewMode}
          setViewMode={setViewMode}
          setSearchQuery={setSearchQuery}
          setSelectedType={setSelectedType}
          setSelectedLevel={setSelectedLevel}
          setSelectedTeacher={setSelectedTeacher}
          setSelectedTech={setSelectedTech}
          selectedPriceMin={selectedPriceMin}
          setSelectedPriceMin={setSelectedPriceMin}
          selectedPriceMax={selectedPriceMax}
          setSelectedPriceMax={setSelectedPriceMax}
        />
        <IsLoadingComponent isLoading={isLoading} viewMode={viewMode} />
        <ViewMoodComponent data={data} viewMode={viewMode} />
        <PaginationSection
          totalCount={data?.totalCount}
          pageNum={pageNum}
          itemPerPage={itemPerPage}
          setPageNum={setPageNum}
        />
      </div>
      <div className="hidden lg:block p-8 xl:py-8 xl:px-3">
        <FilterSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSelectedType={setSelectedType}
          setSelectedLevel={setSelectedLevel}
          setSelectedTeacher={setSelectedTeacher}
          setSelectedTech={setSelectedTech}
          selectedPriceMin={selectedPriceMin}
          setSelectedPriceMin={setSelectedPriceMin}
          selectedPriceMax={selectedPriceMax}
          setSelectedPriceMax={setSelectedPriceMax}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
};

export default CoursesSection;
